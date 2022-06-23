
// add lazy loading on all images
const images = document.getElementsByTagName('img');

for(var i = 0; i < images.length; i++) {
    images[i].setAttribute('loading', 'lazy');
}

/* ----------- */

/* -- remove lazy class on first three images -- */
var firstThreeImages = document.querySelectorAll("img.lazy");
var lazyClasses = document.getElementsByClassName('lazy');

if(firstThreeImages.length >= 3) {
    for(var i = 0; i < 3; i++) {
        firstThreeImages[i].classList.remove('lazy');
        firstThreeImages[i].src = firstThreeImages[i].dataset.src;
    }
}

/* -------- */

// on load: get height of the image and add it to lazy class to form a placeholder bg
window.onload = () => {
    var height = firstThreeImages[0].naturalHeight;
    for(var i = 0; i < lazyClasses.length; i++) {
        lazyClasses[i].style.height = `${height}px`;
    }
};

/* -------- */

/* -- images with lazy class will be shown when you scroll over them -- */

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});

/* -------- */