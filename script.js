// Fade Effect

function autoSlide() {
    setInterval(() => {
        slide(getItemActiveIndex() + 1);
    }, 4000);
}

setInterval(() => {
    slide(getItemActiveIndex() + 1);
}, 4000);

function slideONCLICK() {
    slide(getItemActiveIndex() + 1);
}
function slideONCLICKk() {
    slide(getItemActiveIndex() - 1);
}

window.addEventListener('load',() => {
    // autoSlide();
})
function slide(toIndex) {
    const itemArr = Array.from(document.querySelectorAll('.carousel-item'));
    const itemActive = document.querySelector('.carousel-item-active');
    if(toIndex >=   itemArr.length) {
        toIndex = 0;
    }
    const newItemActive = itemArr[toIndex];
    newItemActive.classList.add('carousel-item-pos-next');
    setTimeout(() => {
        newItemActive.classList.add('carousel-item-next');
        itemActive.classList.add('carousel-item-next');
    }, 20);
    newItemActive.addEventListener('transitionend',() => {
        itemActive.className = "carousel-item";
        newItemActive.className = "carousel-item carousel-item-active";
    }, {
        once: true
    }); 
}

function getItemActiveIndex() {
    const itemArr = Array.from(document.querySelectorAll('.carousel-item'));
    const itemActive = document.querySelector('.carousel-item-active');
    const itemActiveIndex = itemArr.indexOf(itemActive);
    return itemActiveIndex;
}


// Scroll Menu Fixed
const menuTop = document.querySelector('.menu-top')
const btnBackHome = document.querySelector('.btn-back-home');
window.onscroll = function() {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 10) {
        menuTop.classList.add('fixed-menu');
        btnBackHome.classList.add('block');
    }
    else {
        btnBackHome.classList.remove('block');
        menuTop.classList.remove('fixed-menu');
    }
}

// Search Modal
const searchInput = document.querySelector('.search-input-onmodal')
const closeBtn = document.querySelector('.close')
const modalLayoutSearch = document.querySelector('.modal-layout-search')
const searchBtn = document.querySelector('.js-search')
searchBtn.addEventListener('click', () => {
    modalLayoutSearch.classList.add('slide-down');
})
closeBtn.addEventListener('click',() => {
    modalLayoutSearch.classList.remove('slide-down');
})
modalLayoutSearch.addEventListener('click',function(e) {
    if(!searchInput.contains(e.target)) {
        modalLayoutSearch.classList.remove('slide-down')
    }
})


// Cart
const modalCartLayout = document.querySelector('.modal-cart-layout')
const closeCart = document.querySelector('.js-close-cart')
const modalLayout = document.querySelector('.modal-layout')
const cartButton = document.querySelector('.js-cart')
cartButton.addEventListener('click',() => {
    modalLayout.classList.add('show-cart');
    modalCartLayout.classList.add('r0');
})
closeCart.addEventListener('click', () => {
    modalCartLayout.classList.remove('r0');
    modalLayout.classList.remove('show-cart');
})
modalLayout.addEventListener('click',() => {
    modalCartLayout.classList.remove('r0');
    modalLayout.classList.remove('show-cart');
})

// filter
const filter_2 = document.querySelector('.btn-filter-2')
const footer = document.querySelector('.footer')
const filterBtn = document.querySelector('.btn-filter')
const filterSection = document.querySelector('.filter-section')
const wrapperProduct = document.querySelector('.wrapper-product-list')
filterBtn.addEventListener('click',() => {
    filterSection.classList.add('mt-30');
    wrapperProduct.classList.add('top-0');
    footer.classList.add('mt-85')
    filterBtn.classList.add('hidden')
    filter_2.classList.remove('hidden')
})

filter_2.addEventListener('click',() => {
    filterSection.classList.remove('mt-30');
    wrapperProduct.classList.remove('top-0');
    footer.classList.remove('mt-85')
    filter_2.classList.add('hidden')
    filterBtn.classList.remove('hidden')

})


// search
const searchBtn_2 = document.querySelector('.js-search-2 ')
searchBtn_2.addEventListener('click',() => {
    modalLayoutSearch.classList.add('slide-down');
})

// sub option

const opS = document.querySelector('.op-s')
const choose_1 = document.querySelector('.choose-1')
const textChange_1 = document.querySelector('.text-change-1')
const opChoose = document.querySelector('.op-choose')
const opM = document.querySelector('.op-m')
const opL = document.querySelector('.op-l')
const opXL= document.querySelector('.op-xl')
    
opS.addEventListener('click', () => {
    var supOption = document.querySelector('.sub-op-1')
    choose_1.removeChild(textChange_1);
    var newp = document.createElement('span')
    newp.innerHTML = `<p class="pos-a text-change-s  center-h">Size S</p>`
    choose_1.appendChild(newp)
})
opM.addEventListener('click', () => {
    var supOption = document.querySelector('.sub-op-1')
    var textChange_s = document.querySelector('.text-change-s');
    choose_1.removeChild(textChange_s);
    var newp = document.createElement('span')
    newp.innerHTML = `<p class="pos-a text-change-1  center-h">Size M</p>`
    choose_1.appendChild(newp)
    
})
opL.addEventListener('click', () => {
var supOption = document.querySelector('.sub-op-1')
choose_1.removeChild(textChange_1);
var newp = document.createElement('span')
newp.innerHTML = `<p class="pos-a text-change-1  center-h">Size L</p>`
choose_1.appendChild(newp)
})
opXL.addEventListener('click', () => {
    var supOption = document.querySelector('.sub-op-1')
    choose_1.removeChild(textChange_1);
    var newp = document.createElement('span')
    newp.innerHTML = `<p class="pos-a text-change-1  center-h">Size XL</p>`
    choose_1.appendChild(newp)
})

opChoose.addEventListener('click', () => {
    var supOption = document.querySelector('.sub-op-1')
    choose_1.removeChild(textChange_1);
    var newp = document.createElement('span')
    newp.innerHTML = `<p class="pos-a text-change-1  center-h">Choose an option</p>`
    choose_1.appendChild(newp)
})

// modal-2

var arrImg = [ 
    "https://themewagon.github.io/cozastore/images/product-detail-01.jpg",
    "https://themewagon.github.io/cozastore/images/product-detail-02.jpg",
    "https://themewagon.github.io/cozastore/images/product-detail-03.jpg"
];





function pre() {
    index--;
    if(index < -0) index=arrImg.length-1;
    document.querySelector('.img-now').src=arrImg[index];

}
var index = 0;
function next() {
    index++;
    if(index == arrImg.length) index = 0;
    document.querySelector('.img-now').src=arrImg[index];
}
const modal_2 = document.querySelector('.modal-2')
const zoom = document.querySelector('.wrap-icon-zoom')
zoom.addEventListener('click',() => {
    modal_2.classList.add('block')
})

function out() {
    modal_2.classList.remove('block')
}

modal_2.addEventListener('click',() => {
    modal_2.classList.remove('block')

})
const leftArrow = document.querySelector('.js-left')
const rightArrow = document.querySelector('.js-right')
leftArrow.addEventListener('click',function(event) {
    event.stopPropagation();
})
rightArrow.addEventListener('click',function(event) {
    event.stopPropagation();
})

const clickImg = document.querySelector('.toclickimg')
const firImg = document.getElementById('fir-img');
firImg.addEventListener('click',() => {
    document.querySelector('.img-1').classList.add('show-item');
    document.querySelector('.img-2').classList.remove('show-item');
    document.querySelector('.img-3').classList.remove('show-item');
    firImg.classList.add('marked-img')
    clickImg.classList.remove('marked-img')
    clickImgSec.classList.remove('marked-img')
})
clickImg.addEventListener('click',() => {
    document.querySelector('.img-1').classList.remove('opa-1');
    document.querySelector(".img-2").classList.add('show-item')
    document.querySelector(".img-1").classList.remove('show-item')
    document.querySelector(".img-3").classList.remove('show-item')
    firImg.classList.remove('marked-img')
    clickImg.classList.add('marked-img')
    clickImgSec.classList.remove('marked-img')
})

const clickImgSec = document.querySelector('.toclickimg_sec')
clickImgSec.addEventListener('click',() => {
    document.querySelector(".img-3").classList.add('show-item')
    document.querySelector(".img-1").classList.remove('show-item')
    document.querySelector(".img-2").classList.remove('show-item')
    firImg.classList.remove('marked-img')
    clickImg.classList.remove('marked-img')
    clickImgSec.classList.add('marked-img')
})


var arrImg_inner = [
    "https://themewagon.github.io/cozastore/images/product-detail-01.jpg",
    "https://themewagon.github.io/cozastore/images/product-detail-02.jpg",
    "https://themewagon.github.io/cozastore/images/product-detail-03.jpg"
]

var i = 0;
function bef() {
    i--;
    if(i <-0) i= arrImg.length-1;
    document.querySelector('.img-1').src=arrImg_inner[i];
    document.querySelector('.img-2').src=arrImg_inner[i];
    document.querySelector('.img-3').src=arrImg_inner[i];
}

function aft() {
    i++;
    if(i == arrImg_inner.length) i = 0;
    document.querySelector('.img-1').src=arrImg_inner[i];
    document.querySelector('.img-2').src=arrImg_inner[i];
    document.querySelector('.img-3').src=arrImg_inner[i];
}


const btnAddCart = document.querySelector('.btn-add-cart ')
const modal_3 = document.querySelector('.modal-3')
const tickTwo = document.querySelector('.tick-two')
const successDiv = document.querySelector('.add-cart-modal')
btnAddCart.addEventListener('click',() => {
    modal_3.classList.add('visible')
    successDiv.classList.add('scale')
    // tickTwo.classList.add('spin')
})

setInterval(() => {
    successDiv.classList.remove('scale')
    // tickTwo.classList.remove('spin')

}, 1650);
modal_3.addEventListener('click', () => {
    modal_3.classList.remove('visible')
})
successDiv.addEventListener('click', function(event) {
    event.stopPropagation();
})
const btnOK = document.querySelector('.btn-ok')

btnOK.addEventListener('click',() => {
    modal_3.classList.remove('visible');
})
const modalQuickView = document.querySelector('.modal-quick-view')
const closeView = document.querySelector('.close-view')
const modalView = document.querySelector('.modal-view')
const btnviews = document.querySelectorAll('.btn-view')
for(const btnview of btnviews ) {
    btnview.addEventListener('click', () => {
        modalView.classList.add('visible');
    })
}
closeView.addEventListener('click', () => {
    modalView.classList.remove('visible')
})
modalView.addEventListener('click',() => {
    modalView.classList.remove('visible')
})
modalQuickView.addEventListener('click', function(event) {
    event.stopPropagation();
})

