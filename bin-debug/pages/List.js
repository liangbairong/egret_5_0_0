// 列表例子
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super.call(this) || this;
        _this.skinName = "List_eui";
        _this.list_box.alpha = 0;
        var arr = [
            {
                name: "小裤裤扩扩",
                value: "Sdwwwww"
            },
            {
                name: "小裤裤扩扩",
                value: "Sdwwwww"
            },
        ];
        _this.collection = new eui.ArrayCollection();
        _this.collection.source = arr;
        // for(var i = 0; i < 40; i ++)
        // {
        //     this.collection.addItem({"name":"Text" + i,"value":"sjjdsjjdjsdj"});
        // }
        _this.listc.dataProvider = _this.collection;
        _this.listc.height = 30 * 40;
        // this.list.play(0);
        _this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.linkto, _this);
        return _this;
    }
    List.prototype.linkto = function () {
        console.log("Sdsdsd");
        egret.Tween.get(this.list_box).to({ alpha: 1 }, 500, egret.Ease.quadOut);
    };
    List.prototype.close = function () {
    };
    return List;
}(eui.Component));
__reflect(List.prototype, "List");
//# sourceMappingURL=List.js.map