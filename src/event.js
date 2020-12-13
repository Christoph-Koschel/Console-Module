"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Vars = require("./vars").Vars;
var Event = /** @class */ (function () {
    function Event() {
    }
    Event.prototype.On = function (event, callback) {
        // @ts-ignore
        var id = Vars.eventEmitter[event].length;
        // @ts-ignore
        Vars.eventEmitter[event].push(callback);
        return new EventId(id);
    };
    Event.prototype.Emit = function (event, value) {
        // @ts-ignore
        var eventList = Vars.eventEmitter[event];
        for (var i = 0; i < eventList.length; i++) {
            eventList[i](value);
        }
    };
    return Event;
}());
exports.Event = Event;
var EventId = /** @class */ (function () {
    function EventId(id) {
        this.id = id;
    }
    return EventId;
}());
//# sourceMappingURL=event.js.map