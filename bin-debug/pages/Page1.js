var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Page1 = (function (_super) {
    __extends(Page1, _super);
    function Page1() {
        var _this = _super.call(this) || this;
        _this.qq = {
            obj: null,
            x: 240,
            y: 800
        };
        _this.skinName = "Page1_eui";
        setTimeout(function () {
            _this.init();
        }, 100);
        return _this;
    }
    Page1.prototype.init = function () {
        this.an_init.play(0);
        this.linkto();
        var data = RES.getRes("qq_json");
        var txtr = RES.getRes("qq_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.qq.obj = new egret.MovieClip(mcFactory.generateMovieClipData("qq"));
        // qq.play(-1);
        this.addChild(this.qq.obj);
        this.qq.obj.x = this.qq.x;
        this.qq.obj.y = this.qq.y;
        this.qq.obj.gotoAndPlay("right", -1);
        egret.Ticker.getInstance().register(this.onTick, this);
    };
    Page1.prototype.onTick = function (dt) {
        console.log("Sd");
        if (this.qq.x >= 300) {
        }
        else {
            this.qq.x++;
        }
        this.qq.y = this.qq.y - 0.5;
        this.qq.obj.x = this.qq.x;
        this.qq.obj.y = this.qq.y;
        // egret.Ticker.getInstance().unregister(this.onTick, this);
    };
    Page1.prototype.linkto = function () {
        // 提示
        // globals.$hint.toast("时间节点觉得很好的好的好的");
        //    var load= globals.$hint.loading();
        //    load.open();
        //    setTimeout(()=>{
        //         load.close();
        //    },5000)
        // 切换
        // globals.$sceneManage.to(new List());
        //上传
        //   new Uploading((img) => {
        //     this.addChild(img)
        // });
        //帧动画
    };
    Page1.prototype.close = function () {
        console.log("关闭page");
    };
    return Page1;
}(eui.Component));
__reflect(Page1.prototype, "Page1");
//# sourceMappingURL=Page1.js.map