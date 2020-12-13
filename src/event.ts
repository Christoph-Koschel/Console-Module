const {Vars} = require("./vars");

export class Event {
    public On(event: "error" |
                  "log" |
                  "info",
              callback: Function): EventId {
        // @ts-ignore
        let id: number = Vars.eventEmitter[event].length;
        // @ts-ignore
        Vars.eventEmitter[event].push(callback);
        return new EventId(id);
    }

    public Emit(event: "error" |
                    "log" |
                    "info",
                value: string | number
    ) {
        // @ts-ignore
        let eventList: any = Vars.eventEmitter[event];
        for (let i: number = 0; i < eventList.length; i++) {
            eventList[i](value);
        }
    }
}

class EventId {
    public readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}
