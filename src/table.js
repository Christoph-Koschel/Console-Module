"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(template) {
        this.structure = [];
        this.structure = (template !== undefined) ? template.structure : [];
    }
    Table.BuildFromTemplate = function (template) {
        return new Table(new TableTemplate(template));
    };
    Table.prototype.CreateRow = function () {
        var length = this.structure.length;
        var id = new RowId(length);
        this.structure.push([]);
        return id;
    };
    Table.prototype.AddColumn = function (option, row) {
        this.structure[row.id].push(option);
    };
    return Table;
}());
exports.Table = Table;
var RowId = /** @class */ (function () {
    function RowId(id) {
        this.id = id;
    }
    return RowId;
}());
var TableTemplate = /** @class */ (function () {
    function TableTemplate(template) {
        this.structure = template;
    }
    return TableTemplate;
}());
//# sourceMappingURL=table.js.map