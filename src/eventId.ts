export class EventId {
    public readonly id: number;
    public readonly event: string;

    constructor(id: number, event: string) {
        this.id = id;
        this.event = event;
    }
}
