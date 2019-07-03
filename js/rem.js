function fn(){
    var winw = document.documentElement.clientWidth;
    document.documentElement.style.fontsize = winw/7.5 + "px";
}
fn();
window.onresize = fn;