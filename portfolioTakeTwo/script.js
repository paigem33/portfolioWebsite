menuFunc = () => {
    var menu = document.getElementById('menu'); 
    var menuContent = document.getElementById('mainNav')
    if(window.innerWidth < 699){
        if (menuContent.classList.contains('hidden')){
            menuContent.classList.remove('hidden')
            menu.classList.remove('fa-bars')
            menu.classList.add('fa-times')
        } else {
            menuContent.classList.add('hidden')
            menu.classList.remove('fa-times')
            menu.classList.add('fa-bars')
        }
    } 
}


var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTopButton");
};

function scrollToTop(totalTime, easingPower) {
  //console.log("here");
  var timeInterval = 1; //in ms
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);
  //var by=- scrollTop;
  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      //console.log(easeInOut(percentSpent,easingPower));
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      //window.location.hash = hash;
    }
  }, timeInterval);
}

function easeInOut(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}

//function debounce(func, wait = 20, immediate = true) {
//      var timeout;
//      return function() {
//        var context = this, args = arguments;
//        var later = function() {
//          timeout = null;
//          if (!immediate) func.apply(context, args);
//        };
//        var callNow = immediate && !timeout;
//        clearTimeout(timeout);
//        timeout = setTimeout(later, wait);
//        if (callNow) func.apply(context, args);
//      };
//    }


//
//function debounce(func, wait = 20, immediate = true) {
//        console.log('scrolled')
//      var timeout;
//      return function() {
//        var context = this, args = arguments;
//        var later = function() {
//          timeout = null;
//          if (!immediate) func.apply(context, args);
//        };
//        var callNow = immediate && !timeout;
//        clearTimeout(timeout);
//        timeout = setTimeout(later, wait);
//        if (callNow) func.apply(context, args);
//      };
//    };
//    const sliderImages = document.querySelectorAll('.slide-in');
//    function checkSlide() {
//      sliderImages.forEach(sliderImage => {
//        // half way through the image
//        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//        // bottom of the image
//        const imageBottom = sliderImage.offsetTop + sliderImage.height;
//        const isHalfShown = slideInAt > sliderImage.offsetTop;
//        const isNotScrolledPast = window.scrollY < imageBottom;
//        if (isHalfShown && isNotScrolledPast) {
//          sliderImage.classList.add('active');
//        } else {
//          sliderImage.classList.remove('active');
//        }
//      });
//    }
//    window.addEventListener('scroll', debounce(checkSlide));

//function checkPosition() {
//let scrollPos = 0;
//const nav = document.querySelector('.scrollToTopButton');
//  let windowY = window.scrollY;
//  if (windowY > scrollPos) {
//    // Scrolling UP
//    nav.classList.add('hidden');
//  } else {
//    // Scrolling DOWN
//    nav.classList.remove('hidden');
//  }
//  scrollPos = windowY;
//}
//
//window.addEventListener('scroll', checkPosition);