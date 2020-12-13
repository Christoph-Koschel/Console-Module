"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.List = exports.On = exports.Write = exports.variables = void 0;
var vars_1 = require("./vars");
var event_1 = require("./event");
var list = require("./list");
var write = require("./write");
var table = require("./table");
var event = new event_1.Event();
//region vars and args
exports.variables = {
    get userData() {
        return vars_1.Vars.userData;
    },
    get path() {
        return vars_1.Vars.path;
    },
    get module() {
        return vars_1.Vars.module;
    },
    get args() {
        return vars_1.Vars.args;
    }
};
//endregion
//region write-functions
exports.Write = write.Write.Write;
//endregion
//region event-functions
exports.On = event.On;
//endregion
//region templates
exports.List = list.List;
exports.Table = table.Table;
//endregion
//# sourceMappingURL=module.js.map