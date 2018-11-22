var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneManage = (function (_super) {
    __extends(SceneManage, _super);
    function SceneManage() {
        var _this = _super.call(this) || this;
        _this.W = 750;
        _this.H = 1220;
        _this.lastPageEgret = null;
        _this.newPageEgret = null;
        _this.lastPage = null;
        _this.newPage = null;
        _this.init();
        return _this;
    }
    SceneManage.prototype.init = function () {
        var block = new egret.Sprite();
        block.graphics.beginFill(0x000000);
        block.graphics.drawRect(0, 0, this.W, this.H);
        block.graphics.endFill();
        this.addChild(block);
    };
    SceneManage.prototype.delete = function () {
    };
    SceneManage.prototype.to = function (to) {
        var _this = this;
        if (this.newPageEgret) {
            this.lastPageEgret = this.newPageEgret;
            this.lastPage = this.newPage;
            egret.Tween.removeAllTweens();
            this.lastPage.close();
        }
        var con = new egret.DisplayObjectContainer();
        this.addChild(con);
        var sprite = new egret.Sprite();
        sprite.graphics.beginFill(0x000000);
        sprite.graphics.drawCircle(0, 0, this.H / 2 + 100);
        sprite.graphics.endFill();
        sprite.scaleX = 0;
        sprite.scaleY = 0;
        sprite.x = this.W / 2;
        sprite.y = this.H / 2;
        var i = 0;
        egret.Tween.get(sprite).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quadOut)
            .call(function () {
            con.removeChild(sprite);
            if (_this.lastPageEgret) {
                _this.removeChild(_this.lastPageEgret);
                _this.lastPageEgret = null;
            }
        });
        con.mask = sprite;
        con.addChild(to);
        con.addChild(sprite);
        this.newPageEgret = con;
        this.newPage = to;
    };
    return SceneManage;
}(egret.DisplayObjectContainer));
__reflect(SceneManage.prototype, "SceneManage");
//# sourceMappingURL=SceneManage.js.map