import {List} from "./list";
import {Table} from "./table";
import {Event} from "./event";

export class Write {
    private static event: Event = new Event();

    public static Write(type: "list" | "text" | "table", flag: "error" | "log" | "info", value: string | number | List | Table) {
        if (type === "list") {
            if (value instanceof List) {
                Write.WriteList(flag, value);
            }
        } else if (type === "text") {
            if (typeof value === "string" || typeof value === "number") {
                Write.WriteText(flag, value);
            }
        } else if (type === "table") {
            if (value instanceof Table) {
                Write.WriteTable(flag, value);
            }
        }
    }

    private static WriteList(flag: any, list: List) {
        let html: string = "<ul>";
        let value = list.structure;
        for (let i: number = 0; i < value.length; i++) {
            html += "<li>";
            html += "-&nbsp;" + value[i].toString();
            html += "</li>";
        }

        html += "</ul>";

        this.event.Emit(flag, html);
    }

    private static WriteTable(flag: any, table: Table) {
        let html: string = "<table>";
        let value = table.structure;
        for (let i: number = 0; i < value.length; i++) {
            html += "<tr>";
            for (let k: number = 0; k < value[i].length; k++) {
                let td = value[i][k];
                html += `<td colspan="${(td.colspan !== undefined) ? td.colspan : ""}">`;
                html += td.label;
                html += "</td>";
            }
            html += "</tr>";
        }
        html += "</table>";

        this.event.Emit(flag, html);
    }

    private static WriteText(flag: any, value: any) {
        Write.event.Emit(flag, value);
    }
}
