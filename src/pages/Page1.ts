
class Page1 extends eui.Component {

    private bg: eui.Image;
    private grop: eui.Group;
    private an_init: egret.tween.TweenGroup;

    private balloon: eui.Image;

    private qq: any = {
        obj: null,
        x: 240,
        y: 800
    };
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


        var data = RES.getRes("qq_json");
        var txtr = RES.getRes("qq_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.qq.obj = new egret.MovieClip(mcFactory.generateMovieClipData("qq"));
        // qq.play(-1);
        this.addChild(this.qq.obj);
        this.qq.obj.x = this.qq.x;
        this.qq.obj.y = this.qq.y;
        this.qq.obj.gotoAndPlay("right", -1);

        
        egret.Ticker.getInstance().register(this.onTick, this);
    }

    private onTick(dt: number): void {
        console.log("Sd");




        if (this.qq.x >= 300) {
            // this.qq.obj.stop();
            //  this.qq.obj.addEventListener(egret.Event.COMPLETE, () => {
            //     this.qq.obj.gotoAndPlay("right",-1);
            //      this.qq.x--;
            // }, this);
            // this.qq.obj.gotoAndPlay("hb",1);

            //   this.qq.obj.gotoAndPlay("right",-1);
           
           
        } else {
            this.qq.x++;
        }

        this.qq.y = this.qq.y - 0.5;

        this.qq.obj.x = this.qq.x;
        this.qq.obj.y = this.qq.y;
        // egret.Ticker.getInstance().unregister(this.onTick, this);

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


    }

    public close() {
        console.log("关闭page");
    }


}