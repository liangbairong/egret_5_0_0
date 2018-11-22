// TypeScript file

class Hint extends egret.DisplayObjectContainer {
    private W=750;
     private H=1220;
    constructor() {
        super();
    }
    public toast(text) {
        var con: egret.DisplayObjectContainer = new egret.DisplayObjectContainer;
        con.anchorOffsetX = this.W / 2;
        con.anchorOffsetY = this.H / 2;
        con.x = this.W / 2;;
        con.y = this.H / 2;
        this.addChild(con);
        //不会点透
        // var block: eui.Rect = new eui.Rect(300,50,0x000000);
        // con.addChild(block);
        var tit: eui.Label = new eui.Label(text);
        var block: egret.Sprite = new egret.Sprite();
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

    }

    public loading() {
        var con: egret.DisplayObjectContainer = new egret.DisplayObjectContainer;
        con.anchorOffsetX = this.W / 2;
        con.anchorOffsetY = this.H / 2;
        con.x = this.W / 2;;
        con.y = this.H / 2;

        var block: eui.Rect = new eui.Rect(this.W, this.H, 0x000000);
        con.addChild(block);
        block.alpha = 0.01;

        var box: egret.DisplayObjectContainer = new egret.DisplayObjectContainer;
        box.anchorOffsetX = this.W / 2;
        box.anchorOffsetY = this.H / 2;
        box.x = this.W / 2;;
        box.y = this.H / 2;
        con.addChild(box);

        var minbg: egret.Sprite = new egret.Sprite();
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
        var tit: eui.Label = new eui.Label("加载中");
        tit.textColor = 0xffffff;
        tit.textAlign = "center";
        tit.anchorOffsetX = tit.width / 2;
        tit.anchorOffsetY = tit.height / 2;
        tit.x = this.W / 2;
        tit.y = this.H / 2 + 100;
        box.addChild(tit);

        
        var obj = {
            open: () => {
                this.addChild(con);
                box.scaleX = 0;
                box.scaleY = 0;
                egret.Tween.get(box).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticInOut)
                egret.Tween.get(loading, { loop: true }).to({ rotation: 360 }, 2000, egret.Ease.quadOut)
            },
            close: () => {

                egret.Tween.get(box).to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.quadOut)
                    .call(() => {
                        egret.Tween.removeTweens(loading);
                        this.removeChild(con);
                    })

            }
        }

        return obj;
    }

    private animation(con) {
        egret.Tween.get(con).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 300, egret.Ease.quadOut)
            .wait(1500)
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 100, egret.Ease.quadOut)
            .to({ scaleX: 0, scaleY: 0, alpha: 0 }, 400, egret.Ease.quadOut)
            .call(() => {
                this.removeChild(con);
            })
    }
}