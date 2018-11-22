// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Hint = (function (_super) {
    __extends(Hint, _super);
    function Hint() {
        var _this = _super.call(this) || this;
        _this.W = 750;
        _this.H = 1220;
        return _this;
    }
    Hint.prototype.toast = function (text) {
        var con = new egret.DisplayObjectContainer;
        con.anchorOffsetX = this.W / 2;
        con.anchorOffsetY = this.H / 2;
        con.x = this.W / 2;
        ;
        con.y = this.H / 2;
        this.addChild(con);
        //不会点透
        // var block: eui.Rect = new eui.Rect(300,50,0x000000);
        // con.addChild(block);
        var tit = new eui.Label(text);
        var block = new egret.Sprite();
        block.graphics.beginFill(0x000000);
        block.graphics.drawRoundRect(0, 0, tit.width + 60, 50, 10);
        block.graphics.endFill();
        block.anchorOffsetX = block.width / 2;
        block.anchorOffsetY = block.height / 2;
        con.addChild(block);
        block.alpha = 0.6;
        block.x = this.W / 2;
        block.y = this.H / 2;
        con.addChild(tit);
        tit.textColor = 0xffffff;
        tit.textAlign = "center";
        tit.anchorOffsetX = tit.width / 2;
        tit.anchorOffsetY = tit.height / 2;
        tit.x = this.W / 2;
        tit.y = this.H / 2;
        con.alpha = 0;
        con.scaleX = 0;
        con.scaleY = 0;
        this.animation(con);
    };
    Hint.prototype.loading = function () {
        var _this = this;
        var con = new egret.DisplayObjectContainer;
        con.anchorOffsetX = this.W / 2;
        con.anchorOffsetY = this.H / 2;
        con.x = this.W / 2;
        ;
        con.y = this.H / 2;
        var block = new eui.Rect(this.W, this.H, 0x000000);
        con.addChild(block);
        block.alpha = 0.01;
        var box = new egret.DisplayObjectContainer;
        box.anchorOffsetX = this.W / 2;
        box.anchorOffsetY = this.H / 2;
        box.x = this.W / 2;
        ;
        box.y = this.H / 2;
        con.addChild(box);
        var minbg = new egret.Sprite();
        minbg.graphics.beginFill(0x000000);
        minbg.graphics.drawRoundRect(0, 0, 300, 300, 20);
        minbg.graphics.endFill();
        minbg.anchorOffsetX = minbg.width / 2;
        minbg.anchorOffsetY = minbg.height / 2;
        box.addChild(minbg);
        minbg.x = this.W / 2;
        minbg.y = this.H / 2;
        minbg.alpha = 0.6;
        var loading = new egret.Bitmap(RES.getRes("loading_png"));
        box.addChild(loading);
        loading.x = this.W / 2;
        loading.y = this.H / 2 - 20;
        loading.anchorOffsetX = loading.width / 2;
        loading.anchorOffsetY = loading.height / 2;
        var tit = new eui.Label("加载中");
        tit.textColor = 0xffffff;
        tit.textAlign = "center";
        tit.anchorOffsetX = tit.width / 2;
        tit.anchorOffsetY = tit.height / 2;
        tit.x = this.W / 2;
        tit.y = this.H / 2 + 100;
        box.addChild(tit);
        var obj = {
            open: function () {
                _this.addChild(con);
                box.scaleX = 0;
                box.scaleY = 0;
                egret.Tween.get(box).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticInOut);
                egret.Tween.get(loading, { loop: true }).to({ rotation: 360 }, 2000, egret.Ease.quadOut);
            },
            close: function () {
                egret.Tween.get(box).to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.quadOut)
                    .call(function () {
                    egret.Tween.removeTweens(loading);
                    _this.removeChild(con);
                });
            }
        };
        return obj;
    };
    Hint.prototype.animation = function (con) {
        var _this = this;
        egret.Tween.get(con).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 300, egret.Ease.quadOut)
            .wait(1500)
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 100, egret.Ease.quadOut)
            .to({ scaleX: 0, scaleY: 0, alpha: 0 }, 400, egret.Ease.quadOut)
            .call(function () {
            _this.removeChild(con);
        });
    };
    return Hint;
}(egret.DisplayObjectContainer));
__reflect(Hint.prototype, "Hint");
//# sourceMappingURL=Hint.js.map