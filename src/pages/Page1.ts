
class Page1 extends eui.Component {

    private bg: eui.Image;
    private grop: eui.Group;
    private an_init: egret.tween.TweenGroup;

    private balloon:eui.Image;
    constructor() {
        super();
        this.skinName = "Page1_eui";
        setTimeout(() => {
            this.init();
        }, 100);

        


    }
    private init() {
        this.an_init.play(0);
        this.linkto();



    }
    public linkto() {
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
    }

    public close() {
        console.log("关闭page");
    }


}