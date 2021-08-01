let position = 0

function previousImage(){
    const photo = document.getElementById("jsSliderActive");
    if (position !== 0) {
        position += 269.5;
    }       
    photo.style.transform = `translateX(${position}px)`;
    
}
function nextImage(){
    const photo = document.getElementById("jsSliderActive");
    if (position > -2330) {
        position -= 269.5;
    }
    photo.style.transform = `translateX(${position}px)`;
}
