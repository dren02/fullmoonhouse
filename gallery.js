document.addEventListener('DOMContentLoaded', function() {

    let index = 0;
    
    // get all images in array
    const galleryImg = document.querySelectorAll('main img');
    for (let i = 0; i < galleryImg.length; i++) {
        galleryImg[i].addEventListener('click', () => showImage(i))
    }
    
    function showImage(i) {
        index = i;
        document.querySelector('.clicked_img').style.display = 'block';
        document.querySelector('.clicked_img img').src = galleryImg[i].getAttribute('src'); // example.jpg
    }
    
    document.querySelector('.leftArrow').addEventListener('click', leftImage); 
    function leftImage() {
        index--;
        if (index >= 0) {
            showImage(index);
        } else { // go to last img after passing first image
            showImage(galleryImg.length-1);
        }
        console.log(index)
    }
    
    document.querySelector('.rightArrow').addEventListener('click', rightImage);
    function rightImage() {
        index++;
        if (index >= galleryImg.length - 1) { // go to beginning of gallery once the end is reached
            showImage(0);
        }
        showImage(index);
    }
    
    document.querySelector('.closeButton').addEventListener("click", closePreview);
    function closePreview() {
        document.querySelector('.clicked_img').style.display = 'none';
    }
    });