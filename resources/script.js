$('.burger').on('click', function () {
    $('.burger-content').toggleClass('burger-size');
})

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".close-modal");
const openbtn = document.querySelectorAll(".show-modal");

const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < openbtn.length; i++)
	openbtn[i].addEventListener("click", openModal);

closebtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

var btn = $('.scroll-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	});
});


$(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
        $('#header').addClass('header-black');
        $('.header-items').addClass('header-margin');
        $('.menu-item').addClass('scroll-light');
        $('.dark-logo').addClass('hidden-logo')
        $('.white-logo').addClass('visible-logo')
        $('.burger-item').addClass('scroll-light-background');
        $('.header-btn').addClass('head-btn-scroll')
        $(".menu-item").addClass('menu-item-hover');
        $(".scroll-up").addClass('scroll-visible');
        
    } else {
        $('#header').removeClass("header-black");
        $('.header-items').removeClass('header-margin');
        $('.menu-item').removeClass("scroll-light");
        $('.dark-logo').removeClass("hidden-logo");
        $('.white-logo').removeClass("visible-logo");
        $('.burger-item').removeClass("scroll-light-background");
        $('.header-btn').removeClass("head-btn-scroll");
        $(".menu-item").removeClass('menu-item-hover');
        $(".scroll-up").removeClass('scroll-visible');
    }
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: false,  
    navigation: false,
    scrollbar: false,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    centerInsufficientSlides: true,
    breakpoints: {
        767: {
          slidesPerView: 2,
        },
    }
});

const swiperPortfolio = new Swiper('#swiperPortfolio', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
    },
    centerInsufficientSlides: true,
    breakpoints: {
        767: {
          slidesPerView: 6,
        },
    }
});

$(document).ready(function () {
    var customContainer = jQuery(".iso-container");
    customContainer.isotope({
      filter: "*",
      transitionDuration: "1s",
      animationOptions: {
        duration: 7500,
        queue: false
      },
  
      layoutMode: "fitRows",
      fitRows: {
        gutter: 0
      }
    });
  
    jQuery("#custom-filter li:first-child > a").addClass("is-checked");
  
    jQuery("#custom-filter a").click(function () {
      jQuery("#custom-filter .is-checked").removeClass("is-checked");
      jQuery(this).addClass("is-checked");
  
      var customSelector = jQuery(this).attr("data-filter");
      customContainer.isotope({
        filter: customSelector,
        transitionDuration: "1s",
        animationOptions: {
          duration: 7500,
          queue: false
        },
        layoutMode: "fitRows",
        fitRows: {
          gutter: 0
        }
      });
      return false;
    });
  });
  
  $('.nav-item').on('click', function () {
    $(this).toggleClass('active-filter');
})

$('.product-nav a').on('click', function () {
    $('.product-nav a').removeClass('active-filter');
    $(this).addClass('active-filter');
})