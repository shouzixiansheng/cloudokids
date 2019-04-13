/**
 * Created by Mr.Gao on 16.7.19.
 */
function  getCookie (attr){
    var arr =   document.cookie.split("; ");
    for(var i = 0; i<arr.length;i++){
        var arrItem = arr[i].split("=");
        if(arrItem[0] == attr){
            return arrItem[1];
        }
    }
}
//    存入一个cookie   attr value  days过期
function  setCookie (attr,value,days){  // name = li
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+days);
    document.cookie = attr+"="+value+";expires="+oDate;

}
// 删除
function  deleteCookie (attr){  // name = li
    setCookie(attr,"",-1);
}