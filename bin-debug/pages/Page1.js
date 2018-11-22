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
        _this.skinName = "Page1_eui";
        setTimeout(function () {
            _this.init();
        }, 100);
        return _this;
    }
    Page1.prototype.init = function () {
        this.an_init.play(0);
        this.linkto();
        //   var loading = new egret.Bitmap(RES.getRes("hbleft_png"));
        //         this.addChild(loading);
        //         loading.y=300;
        //    egret.Tween.get(this.balloon).to({ x:100,y:200},1000)
        //    .to({ x:200,y:300}, 1000)
        //    .to({ x:300,y:200}, 1000)
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
        // var data = RES.getRes("nn_json");
        // var txtr = RES.getRes("nn_png");
        // var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        // var nn:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData( "nn" ) );
        // nn.play(-1);
        // this.addChild(nn)
        // // nn.gotoAndPlay(0);
    };
    Page1.prototype.close = function () {
        console.log("关闭page");
    };
    return Page1;
}(eui.Component));
__reflect(Page1.prototype, "Page1");
//# sourceMappingURL=Page1.js.map