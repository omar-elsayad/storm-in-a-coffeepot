let sliderImg = document.getElementsByClassName("slider-img");

function slider() {
    if(sliderImg[0].style.order == "1"){
        sliderImg[0].style.order = "2";
        sliderImg[1].style.order = "1";
    }else if(sliderImg[1].style.order == "1"){
        sliderImg[2].style.order = "1";
        sliderImg[1].style.order = "3";
    }else if(sliderImg[2].style.order == "1"){
        order()
    }
}

function order() {
    sliderImg[0].style.order = "1";
    sliderImg[1].style.order = "2";
    sliderImg[2].style.order = "3";
}

order();

setInterval(() => {
    slider();
}, 3000);