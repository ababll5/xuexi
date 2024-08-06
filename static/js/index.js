
//锚点滚动
function anchorRoll(id) {
    if (typeof id !== 'string') {
        return;
    }
    //获取传进来的模块对象相对于其定位父元素的垂直偏移量
    var anchor = document.getElementById(id);
    var anchorDist = anchor.offsetTop;
    //获取顶部固定定位导航条的高度
    var navWarp = document.getElementById('navWrap');
    var navWarpH = navWarp.offsetHeight;
    window.scrollTo({
        left: 0,
        //滚动距离减去固定在顶部的导航条的高度
        top: anchorDist - navWarpH,
        behavior: 'smooth'
    });
}
var navAnchor = document.getElementById('navAnchorList').children;
for (var i = 0; i < navAnchor.length; i++) {
    navAnchor[i].onclick = function () {
        anchorRoll('anchor' + this.getAttribute('data-anchor'));
    }
}


function valueChange(radix, step, time) {   
    var consultBadge = document.getElementById('consultBadge');
    consultBadge.innerHTML = radix;
    var randomChange = function() {
        var random = getRandom(0,1);
        if(radix > step && random) {
            radix -= step;
        }else {
            radix += step;
        }
        radix = radix > 99 ? 99 : radix;
        consultBadge.innerHTML = radix;
        clearInterval(delayer);
        time = getRandom(2,10);
        delayer = setInterval(randomChange, time * 1000);
    }
    var delayer = setInterval(randomChange, time * 1000);
}
valueChange(getRandom(12,38), 1, 5);


function getRandom(n1, n2) {
    var max = Math.floor(n1 > n2 ? n1 : n2);
    var min = Math.ceil(n1 < n2 ? n1 : n2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numberScroll(selector, target, duration) {
    var element = document.querySelector(selector);
    var start = element.textContent;
    
    var end = target;
    var startTime = null;
   
    function animate(time) {
      if (startTime === null) startTime = time;
      var progress = time - startTime;
      var difference = end - start;
      
      if (progress < duration) {
        element.textContent = Math.round(start + (difference * (progress / duration)));
        window.requestAnimationFrame(animate);
      } else {
        element.textContent = end;
      }
    }
   
    element.textContent = start;
    window.requestAnimationFrame(animate);
  }

