export class Vars {
    public static path: string = "";
    public static module: string = "";
    public static userData: string = "";
    public static args: string[] = [];
    public static eventEmitter:object = {
        "error": [],
        "log": [],
        "info": [],
        "list-info": [],
        "list-error": [],
        "list-log": []
    }
}
