
// add lazy loading on all images
const images = document.getElementsByClassName('image');

for(var i = 0; i < images.length; i++) {
    console.log(images[i].setAttribute('loading', 'lazy'));
}
