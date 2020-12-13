"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var vars_1 = require("./vars");
var eventId_1 = require("./eventId");
var View = /** @class */ (function () {
    function View() {
    }
    View.Send = function (event) {
        var list = vars_1.Vars.eventEmitter[event];
        for (var i = 0; i < list.length; i++) {
            list[i]();
        }
    };
    View.On = function (event, callback) {
        var id = vars_1.Vars.eventEmitter[event].length;
        vars_1.Vars.eventEmitter[event].push(callback);
        return new eventId_1.EventId(id);
    };
    return View;
}());
exports.View = View;
//# sourceMappingURL=view.js.map