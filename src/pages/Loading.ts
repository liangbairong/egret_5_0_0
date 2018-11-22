
class Loading extends eui.Component {
    public jd: eui.Image;
    public textFtestield: eui.Label;


    constructor() {
        super();
        this.skinName = "Loading_eui";
        this.jd.width=0;
        this.jd.anchorOffsetX=0;
        
    }

    //加载进度
    public onProgress(current: number, total: number): void {
        var val = Number(current / total * 100).toFixed(0);
        this.textFtestield.text = `${val}%`;

        this.jd.width=370*Number(current / total);

        if (val === '100') {
            setTimeout(() => {
                globals.$sceneManage.to(new Page1());
            }, 400)
        }
    }
    //页面关闭
    public close() {

    }



}