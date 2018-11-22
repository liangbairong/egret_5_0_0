
class SceneManage extends egret.DisplayObjectContainer {
    private W = 750;
    private H = 1220;
    private lastPageEgret: egret.DisplayObjectContainer = null;
    private newPageEgret: egret.DisplayObjectContainer = null;

    private lastPage = null;
    private newPage = null;

    constructor() {
        super();
        this.init()
    }
    private init() {
        var block: egret.Sprite = new egret.Sprite();
        block.graphics.beginFill(0x000000);
        block.graphics.drawRect(0, 0, this.W, this.H);
        block.graphics.endFill();
        this.addChild(block)
    }
    public delete() {

    }
    public to(to) {
        if (this.newPageEgret) {
            this.lastPageEgret = this.newPageEgret;
            this.lastPage = this.newPage;
            egret.Tween.removeAllTweens();
            this.lastPage.close();
        }
        var con = new egret.DisplayObjectContainer();
        this.addChild(con);
        var sprite: egret.Sprite = new egret.Sprite();
        sprite.graphics.beginFill(0x000000);
        sprite.graphics.drawCircle(0, 0, this.H / 2 + 100);
        sprite.graphics.endFill();
        sprite.scaleX = 0;
        sprite.scaleY = 0;
        sprite.x = this.W / 2;
        sprite.y = this.H / 2;
        var i = 0;
        egret.Tween.get(sprite).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quadOut)
            .call(() => {
                con.removeChild(sprite);
                if (this.lastPageEgret) {
                    this.removeChild(this.lastPageEgret);
                    this.lastPageEgret = null;
                }
            })



        con.mask = sprite;
        con.addChild(to);
        con.addChild(sprite);
        this.newPageEgret = con;
        this.newPage = to;




    }
}