export class List {
    public readonly structure: any[] = [];

    public AddListItem(value: string | number): ItemId {
        let id = new ItemId(this.structure.length);
        this.structure.push(value);
        return id;
    }

    public RemoveListItem(itemId: ItemId) {
        delete this.structure[itemId.id];
    }
}

class ItemId {
    public readonly id;

    constructor(id: number) {
        this.id = id;
    }
}
