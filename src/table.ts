interface columnTemplate {
    label?: string,
    colspan?: number
}

export class Table {
    public readonly structure: any[] = [];

    static BuildFromTemplate(template: Array<Array<columnTemplate>>): Table {
        return new Table(new TableTemplate(template));
    }

    public constructor(template?: TableTemplate | void) {
        this.structure = (template !== undefined) ? template.structure : [];
    }

    public CreateRow(): RowId {
        let length: number = this.structure.length;
        let id = new RowId(length);
        this.structure.push([]);
        return id;
    }

    public AddColumn(option: columnTemplate, row: RowId) {
        this.structure[row.id].push(option);
    }
}

class RowId {
    public readonly id: number;

    public constructor(id: number) {
        this.id = id;
    }
}

class TableTemplate {
    public readonly structure: any[];

    public constructor(template:Array<Array<columnTemplate>>) {
        this.structure = template;
    }
}
