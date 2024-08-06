//禁止用户打开开发者工具查看源代码
document.onkeydown = function () {
    var e = window.event || arguments[0];
    if (e.keyCode == 123) {
        return false;
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
        return false;
    } else if ((e.ctrlKey) && (e.keyCode == 85)) {//追加
        return false;
    }
};
//禁止右击行为
document.oncontextmenu = function () {
    return false;
};
//禁止拖拽图片
document.ondragstart = function() {
    var e = window.event || arguments[0];
    var targetEl = e.target.nodeName;
    if(targetEl == 'IMG') {
        return false;
    }
};