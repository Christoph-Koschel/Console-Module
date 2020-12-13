import {Vars} from "./vars";
import {Event} from "./event";
import * as list from"./list";
import * as write from "./write";
import * as table from "./table";

const event = new Event();

//region vars and args
export const variables = {
    get userData(): string {
        return Vars.userData;
    },

    set userData(value: string) {
        Vars.userData = value;
    },

    get path(): string {
        return Vars.path;
    },

    set path(value: string) {
        Vars.path = value;
    },

    get module(): string {
        return Vars.module;
    },

    set module(value: string) {
        Vars.module = value;
    },

    get args(): string[] {
        return Vars.args;
    },

    set args(value: string[]) {
        Vars.args = value;
    }

}

//endregion
//region write-functions

export const Write = write.Write.Write;

//endregion
//region event-functions


export const On = event.On;

//endregion
//region templates

export const List = list.List;
export const Table = table.Table;

//endregion
