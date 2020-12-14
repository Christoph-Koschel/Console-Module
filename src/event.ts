import {Vars} from "./vars";
import {EventId} from "./eventId";

export class Event {
    public On(event: "error" |
                  "log" |
                  "info",
              callback: Function): EventId {
        // @ts-ignore
        let id: number = Vars.eventEmitter[event].length;
        // @ts-ignore
        Vars.eventEmitter[event].push(callback);
        return new EventId(id, event);
    }

    public Remove(eventId: EventId) {
        let id = eventId.id;
        let event = eventId.event;

        delete Vars.eventEmitter[event][id];
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
