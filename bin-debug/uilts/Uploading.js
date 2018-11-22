var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Uploading = (function () {
    function Uploading(callback) {
        this.file = window.document.getElementById("file");
        this.file.click();
        this.file.addEventListener("change", function (e) {
            var files = e.target.files || e.dataTransfer.files;
            var reader = new FileReader();
            reader.readAsDataURL(files[0]); //读取文件并将文件以URL的形式保存在resulr属性中 base64格式
            reader.onload = function (e) {
                var base64 = e.target.result; // base64格式图片地址 
                var obj = new Image();
                obj.src = base64;
                obj.onload = function () {
                    var texture = new egret.Texture();
                    var bitmapdata = new egret.BitmapData(obj);
                    texture.bitmapData = bitmapdata;
                    var imgReview = new egret.Bitmap(texture);
                    console.log(imgReview);
                    if (callback)
                        callback(imgReview);
                };
            };
        }, false);
    }
    return Uploading;
}());
__reflect(Uploading.prototype, "Uploading");
//# sourceMappingURL=Uploading.js.map