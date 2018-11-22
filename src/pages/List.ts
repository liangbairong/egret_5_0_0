
// 列表例子

class List extends eui.Component {
    private bg:eui.Image;
    private listc: eui.List;
    private collection: eui.ArrayCollection;

    private list_box: eui.Group;
    private list: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "List_eui";

        this.list_box.alpha=0;

        var arr = [
            {
                name: "小裤裤扩扩",
                value: "Sdwwwww"
            },
            {
                name: "小裤裤扩扩",
                value: "Sdwwwww"
            },
        ]
        this.collection = new eui.ArrayCollection();
        this.collection.source = arr;
        // for(var i = 0; i < 40; i ++)
        // {
        //     this.collection.addItem({"name":"Text" + i,"value":"sjjdsjjdjsdj"});
        // }
        this.listc.dataProvider = this.collection;
        this.listc.height = 30 * 40;


   

        // this.list.play(0);

        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.linkto, this)
    }
    public linkto(){
        console.log("Sdsdsd");
        
         egret.Tween.get(this.list_box).to({ alpha: 1 }, 500, egret.Ease.quadOut)
    }


    public close() {
       
    }


}