
// ////////////////////////////////////////////
var owl = $('#slider_1');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl: true,
    autoplayHoverPause:true,
    
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});
// /////////


// ////////////////////////////////////////////
var owl = $('.slider_2');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:0,
    navigation: true,
    autoplay: true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 80,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 2,
        },
        600:{
            items: 4,
        },
        1100:{
            items: 5,
        },
        1200:{
            items:6
        }
    }
});
// /////////


// ////////////////////////////////////////////
var owl = $('.slider_3');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:false,
    margin:10,
    navigation: true,
    autoplay: true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    smartSpeed: 800,
    rtl: true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 80,
    dots: true,  
    dotsEach:true,
    navRewind: false,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:3
        }
    }
});
// /////////

// ////////////////////////////////////////////
var owl = $('#slider_profile');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsData: true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});
// /////////

//////////////////////////
window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})


window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////

// ////////////////


// sidebar
const sms = document.querySelector('#sms');
const exit = document.querySelector('.exit');
const sidebar = document.querySelector('#sidebar');

sms.addEventListener('click', function() {
    sidebar.classList.toggle("sidebar-display-blo")
});

exit.addEventListener('click', function() {
    sidebar.classList.remove("sidebar-display-blo")
});
function close_sidebar() {
const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove("sidebar-display-blo")
}

const images = ["img/cross.png","img/circle.png","img/triangle.png","img/square.png"]

let firstImage = document.createElement("img"),
secondImage = document.createElement("img"),
thirdImage = document.createElement("img"),
fourthImage = document.createElement("img");

let orderedImages = images.sort(() => Math.random() - 0.5);

firstImage.src = orderedImages[0];
secondImage.src = orderedImages[1];
thirdImage.src = orderedImages[2];
fourthImage.src = orderedImages[3];

let container = document.getElementById("container");

container.appendChild(firstImage);
container.appendChild(secondImage);
container.appendChild(thirdImage);
container.appendChild(fourthImage);


//////////////////////////
window.addEventListener("load", function () {
    let container = document.getElementById("container");
    let app = document.getElementById("App");
    app.style.display = "none";
    
    setTimeout(function () {
        container.style.display = "none";
        app.style.display = "block";
    },10);

})
// /////////////////////

function open_lang() {
    let lang = document.getElementById("lang")
    lang.classList.add("open_lang")
}
function close_lang() {
    let lang = document.getElementById("lang")
    lang.classList.remove("open_lang")
}
/////////////////////
function change_login_img() {
    let Login = document.getElementById("Login")
    Login.classList.add("change_login_img")
}
function change_login_img_2() {
    let Login = document.getElementById("Login")
    Login.classList.remove("change_login_img")
}
// /////////////////
function forma_switch() {
    let Login = document.getElementById("Login")
    let log_btn = document.getElementById("log_btn")
    let reg_btn = document.getElementById("reg_btn")
    Login.classList.add("forma_switch")
    reg_btn.classList.add("active")
    log_btn.classList.remove("active")
}
function forma_switch_remove() {
    let Login = document.getElementById("Login")
    let log_btn = document.getElementById("log_btn")
    let reg_btn = document.getElementById("reg_btn")    
    Login.classList.remove("forma_switch")
    reg_btn.classList.remove("active")
    log_btn.classList.add("active")    
}



/////////////////////
let dark = document.querySelector("#darkMode");
let darkIcon = document.querySelector("#moon_icon");

dark.addEventListener("click", function () {
    document.body.classList.toggle("dark_mode");
    if (document.body.classList.contains("dark_mode")) {
        darkIcon.src = "img/moon.png";
        darkIcon.classList.add("sun_icon");
    } else {
        darkIcon.src = "img/sun.png";
    }
    
})
////////////////
function fucas(){
document.getElementById("search_bar").focus();
}



document.getElementById("search_bar").addEventListener("input", function() {
    var input = document.getElementById("search_bar");
    var element = document.getElementById("product_in_search");

    if (this.value.trim() !== '') {
        element.style.display = "block"  ;
    } else {
        element.style.display = "none " ;
    }
});