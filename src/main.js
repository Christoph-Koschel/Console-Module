"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.List = exports.view = exports.On = exports.Write = exports.variables = void 0;
var vars_1 = require("./vars");
var event_1 = require("./event");
var list = require("./list");
var write = require("./write");
var table = require("./table");
var view_1 = require("./view");
var event = new event_1.Event();
//region vars and args
exports.variables = {
    get userData() {
        return vars_1.Vars.userData;
    },
    set userData(value) {
        vars_1.Vars.userData = value;
    },
    get path() {
        return vars_1.Vars.path;
    },
    set path(value) {
        vars_1.Vars.path = value;
    },
    get module() {
        return vars_1.Vars.module;
    },
    set module(value) {
        vars_1.Vars.module = value;
    },
    get args() {
        return vars_1.Vars.args;
    },
    set args(value) {
        vars_1.Vars.args = value;
    }
};
//endregion
//region write-functions
exports.Write = write.Write.Write;
//endregion
//region event-functions
exports.On = event.On;
exports.view = {
    Send: view_1.View.Send,
    On: view_1.View.On
};
//endregion
//region templates
exports.List = list.List;
exports.Table = table.Table;
//endregion
//# sourceMappingURL=main.js.map