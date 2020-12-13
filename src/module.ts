import {Vars} from "./vars";
import {Event} from "./event";
import {View} from "./view";
import * as list from"./list";
import * as write from "./write";
import * as table from "./table";

const event = new Event();

//region vars and args
export const variables = {
    get userData(): string {
        return Vars.userData;
    },

    get path(): string {
        return Vars.path;
    },

    get module(): string {
        return Vars.module;
    },

    get args(): string[] {
        return Vars.args;
    }
}

//endregion
//region write-functions

export const Write = write.Write.Write;

//endregion
//region event-functions


export const On = event.On;
export const view = {
    Send: View.Send,
    On: View.On
}


//endregion
//region templates

export const List = list.List;
export const Table = table.Table;

//endregion
