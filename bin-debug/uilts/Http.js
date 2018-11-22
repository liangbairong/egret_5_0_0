var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Http = (function () {
    function Http() {
    }
    Http.prototype.get = function (param) {
        var _this = this;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        var data = "";
        if (param.data) {
            data = this.formatData(param.data, "get");
        }
        request.open(param.url + "?" + data, egret.HttpMethod.GET);
        request.send();
        return new Promise(function (resolve, reject) {
            request.addEventListener(egret.Event.COMPLETE, function (event) {
                var request = event.currentTarget;
                resolve(JSON.parse(request.response));
            }, _this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (event) {
                var err = event;
                console.log("get data : ", err);
                reject(err);
            }, _this);
        });
    };
    Http.prototype.post = function (param) {
        var _this = this;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        var data = "";
        if (param.data) {
            data = this.formatData(param.data, "post");
        }
        // data=param.data;
        request.open(param.url, egret.HttpMethod.POST);
        //设置响应头
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //发送参数
        request.send(data);
        return new Promise(function (resolve, reject) {
            request.addEventListener(egret.Event.COMPLETE, function (event) {
                var request = event.currentTarget;
                resolve(JSON.parse(request.response));
            }, _this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (event) {
                var err = event;
                console.log("get data : ", err);
                reject(err);
            }, _this);
        });
    };
    Http.prototype.formatData = function (data, type) {
        var params = [];
        for (var key in data) {
            params.push(key + '=' + data[key]);
        }
        var repData = '';
        repData = params.join('&');
        return repData;
    };
    return Http;
}());
__reflect(Http.prototype, "Http");
//# sourceMappingURL=Http.js.map