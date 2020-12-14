import {Vars} from "./vars";
import {EventId} from "./eventId";

export class View {
    public static Send(event: "clear") {
        let list = Vars.eventEmitter[event];

        for (let i:number = 0; i < list.length; i++) {
            list[i]();
        }
    }

    public static Remove(eventId:EventId) {
        let id = eventId.id;
        let event = eventId.event;

        delete Vars.eventEmitter[event][id];
    }

    public static On(event: "clear", callback: Function) {
        let id:number = Vars.eventEmitter[event].length;
        Vars.eventEmitter[event].push(callback);
        return new EventId(id,event);
    }
}
