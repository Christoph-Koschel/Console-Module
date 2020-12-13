"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vars = void 0;
var Vars = /** @class */ (function () {
    function Vars() {
    }
    Vars.path = "";
    Vars.module = "";
    Vars.userData = "";
    Vars.args = [];
    Vars.eventEmitter = {
        "error": [],
        "log": [],
        "info": [],
        "list-info": [],
        "list-error": [],
        "list-log": []
    };
    return Vars;
}());
exports.Vars = Vars;
//# sourceMappingURL=vars.js.map