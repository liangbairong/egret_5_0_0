var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/// <reference path="./uilts/SceneManage.ts" />
/// <reference path="./uilts/Http.ts" />
/// <reference path="./uilts/Hint.ts" />
var DebugGlobal = (function () {
    function DebugGlobal() {
        this.$view = {
            W: 750,
            H: 1220
        };
        this.$sceneManage = new SceneManage();
        this.$hint = new Hint();
        this.$http = new Http();
    }
    return DebugGlobal;
}());
__reflect(DebugGlobal.prototype, "DebugGlobal", ["Global"]);
if (!window.globals) {
    window.globals = new DebugGlobal();
}
//# sourceMappingURL=Global.js.map