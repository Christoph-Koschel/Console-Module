"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var List = /** @class */ (function () {
    function List() {
        this.structure = [];
    }
    List.prototype.AddListItem = function (value) {
        var id = new ItemId(this.structure.length);
        this.structure.push(value);
        return id;
    };
    List.prototype.RemoveListItem = function (itemId) {
        delete this.structure[itemId.id];
    };
    return List;
}());
exports.List = List;
var ItemId = /** @class */ (function () {
    function ItemId(id) {
        this.id = id;
    }
    return ItemId;
}());
//# sourceMappingURL=list.js.map