class Http {
    constructor() {
    }
    public get(param) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        var data = "";
        if (param.data) {
            data = this.formatData(param.data, "get");
        }
        request.open(param.url + "?" + data, egret.HttpMethod.GET);
        request.send();
        return new Promise((resolve, reject) => {
            request.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                var request = <egret.HttpRequest>event.currentTarget;
                resolve(JSON.parse(request.response))
            }, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event: egret.IOErrorEvent) => {
                var err = event;
                console.log("get data : ", err);
                reject(err)
            }, this);
        })
    }

    public post(param) {
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
        return new Promise((resolve, reject) => {
            request.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                var request = <egret.HttpRequest>event.currentTarget;
                resolve(JSON.parse(request.response))
            }, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event: egret.IOErrorEvent) => {
                var err = event;
                console.log("get data : ", err);
                reject(err)
            }, this);
        })
    }

    private formatData(data: any, type: string) {
        var params: any = [];
        for (var key in data) {
            params.push(key + '=' + data[key]);
        }
        var repData: any = '';
        repData = params.join('&');

        return repData
    }
}
