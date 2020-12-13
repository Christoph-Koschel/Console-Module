"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var vars_1 = require("./vars");
var eventId_1 = require("./eventId");
var Event = /** @class */ (function () {
    function Event() {
    }
    Event.prototype.On = function (event, callback) {
        // @ts-ignore
        var id = vars_1.Vars.eventEmitter[event].length;
        // @ts-ignore
        vars_1.Vars.eventEmitter[event].push(callback);
        return new eventId_1.EventId(id);
    };
    Event.prototype.Emit = function (event, value) {
        // @ts-ignore
        var eventList = vars_1.Vars.eventEmitter[event];
        for (var i = 0; i < eventList.length; i++) {
            eventList[i](value);
        }
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map