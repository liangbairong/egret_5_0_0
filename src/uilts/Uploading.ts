class Uploading {
    private file: any;
    constructor(callback) {
        this.file = window.document.getElementById("file");
        this.file.click();
        this.file.addEventListener("change", (e) => {
            let files = e.target.files || e.dataTransfer.files;
            let reader = new FileReader()
            reader.readAsDataURL(files[0]) //读取文件并将文件以URL的形式保存在resulr属性中 base64格式
            reader.onload = (e: any) => { // 文件读取完成时触发 
                let base64 = e.target.result; // base64格式图片地址 
                var obj = new Image();
                obj.src = base64;
                obj.onload = () => {
                    let texture: egret.Texture = new egret.Texture();
                    let bitmapdata: egret.BitmapData = new egret.BitmapData(obj);
                    texture.bitmapData = bitmapdata;
                    let imgReview: egret.Bitmap = new egret.Bitmap(texture);

                    console.log(imgReview);
                    if (callback) callback(imgReview);
                }
            }
        }, false)


    }
}