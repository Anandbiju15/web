
function startTime(){
var d=new Date();
var h=30*((d.getHours() %12)+d.getMinutes()/60);
var m=6*d.getMinutes();
var s=6*d.getSeconds();
var se = "AM"
// m=checkTime(m);
// s=checkTime(s);
setAttr('h-hand',h);
setAttr('m-hand',m);
setAttr('s-hand',s);
setAttr('s-tail',s+180);

var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
if(h>=12){
 se = "PM";
}
function setAttr(id,val){
    var v='rotate('+val+',70,70)';
    document.getElementById(id).setAttribute('transform',v);
}
document.getElementById('txt').innerHTML=h+":"+m+":"+s+""+se;
var t=setTimeout(startTime,1000); 
}
function checkTime(i){
    
    if (i<10) {i="0"+i};
        return i;
}
//inbuilt method for linking with the time
window.onload=startTime;