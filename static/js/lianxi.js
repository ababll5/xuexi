var telNumber = document.querySelectorAll('[data-tag="tel"]');
var wxNumber = document.querySelectorAll('[data-tag="wx"]');
var qqNumber = document.querySelectorAll('[data-tag="qq"]');

//要修改，改对应的引号里的内容即可, 注意：只改引号里的内容，引号不能删
var contactInfo = {
    tel: "",
    wx: "微信: zcx20220901",
    qq: " "
}

telNumber.forEach(function(item,index,arr){
    item.innerText = contactInfo.tel;
});

wxNumber.forEach(function(item,index,arr){
    item.innerText = contactInfo.wx;
});

qqNumber.forEach(function(item,index,arr){
    item.innerText = contactInfo.qq;
});