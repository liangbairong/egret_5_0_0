var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super.call(this) || this;
        _this.skinName = "Loading_eui";
        _this.jd.width = 0;
        _this.jd.anchorOffsetX = 0;
        return _this;
    }
    //加载进度
    Loading.prototype.onProgress = function (current, total) {
        var val = Number(current / total * 100).toFixed(0);
        this.textFtestield.text = val + "%";
        this.jd.width = 370 * Number(current / total);
        if (val === '100') {
            setTimeout(function () {
                globals.$sceneManage.to(new Page1());
            }, 400);
        }
    };
    //页面关闭
    Loading.prototype.close = function () {
    };
    return Loading;
}(eui.Component));
__reflect(Loading.prototype, "Loading");
//# sourceMappingURL=Loading.js.map