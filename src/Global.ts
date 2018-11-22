
/// <reference path="./uilts/SceneManage.ts" />
/// <reference path="./uilts/Http.ts" />
/// <reference path="./uilts/Hint.ts" />
declare interface Global {
    $view:any;
    $sceneManage:SceneManage;  //页面管理
    $hint:Hint; 
    $http:Http;
  
}

class DebugGlobal implements Global {
    $view={
        W:750,
        H:1220
    }
    $sceneManage=new SceneManage();
    $hint=new Hint();
    $http=new Http();
}


if (!(<any>window).globals) {
    (<any>window).globals = new DebugGlobal();
}



declare let globals: Global;
declare interface Window {
    globals: Global
}





