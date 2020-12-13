"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
var list_1 = require("./list");
var table_1 = require("./table");
var event_1 = require("./event");
var Write = /** @class */ (function () {
    function Write() {
    }
    Write.Write = function (type, flag, value) {
        if (type === "list") {
            if (value instanceof list_1.List) {
                Write.WriteList(flag, value);
            }
        }
        else if (type === "text") {
            if (typeof value === "string" || typeof value === "number") {
                Write.WriteText(flag, value);
            }
        }
        else if (type === "table") {
            if (value instanceof table_1.Table) {
                Write.WriteTable(flag, value);
            }
        }
    };
    Write.WriteList = function (flag, list) {
        var html = "<ul>";
        var value = list.structure;
        for (var i = 0; i < value.length; i++) {
            html += "<li>";
            html += "-&nbsp;" + value[i].toString();
            html += "</li>";
        }
        html += "</ul>";
        this.event.Emit(flag, html);
    };
    Write.WriteTable = function (flag, table) {
        var html = "<table>";
        var value = table.structure;
        for (var i = 0; i < value.length; i++) {
            html += "<tr>";
            for (var k = 0; k < value[i].length; k++) {
                var td = value[i][k];
                html += "<td colspan=\"" + ((td.colspan !== undefined) ? td.colspan : "") + "\">";
                html += td.label;
                html += "</td>";
            }
            html += "</tr>";
        }
        html += "</table>";
        this.event.Emit(flag, html);
    };
    Write.WriteText = function (flag, value) {
        Write.event.Emit(flag, value);
    };
    Write.event = new event_1.Event();
    return Write;
}());
exports.Write = Write;
//# sourceMappingURL=write.js.map