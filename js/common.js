// 側選單
$('.right_menu .arrow_box').click(function () {
	$('.right_menu .arRight').toggleClass('rotate');
	$('.right_menu .menu_box').toggleClass('gohide');
});
$('.left_menu .arrow_box').click(function () {
	$('.left_menu .arLeft').toggleClass('rotate');
	$('.left_menu .menu_box').toggleClass('gohide');
});
$('li.subevent a, .menuMask').click(function () {
	$('.left_menu .menu_box, .menuMask').toggleClass('showMask');
});
$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.right_menu, .left_menu').addClass('subfixed');
	} else {
		$('.right_menu, .left_menu').removeClass('subfixed');
	}
});

// hashtag Smooth scrolling
var $clickTag = $('area[href^="#"], .menu_box a[href^="#"], .gotopMB a[href^="#"], a.gotheme');
$clickTag.click(function () {
	var target = $(this.getAttribute('href'));
	if ($(window).width() < 768) {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 300);
		}
		return false;
	} else {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 300);
		}
		return false;
	}
});

//區塊boxman菜盤裝飾
document.querySelectorAll('.boxmanDish1 .container').forEach(item=>{
	item.insertAdjacentHTML('afterbegin',`
	<div class="boxmanDish1__decoR">
    <img src="img/gallery/deco_block1.png" class="w-100 h-auto" alt="">
    </div>
    <div class="boxmanDish1__decoL">
    <img src="img/gallery/deco_block2.png" class="w-100 h-auto" alt="">
    </div>`)
})
document.querySelectorAll('.boxmanDish2 .container').forEach(item=>{
	item.insertAdjacentHTML('afterbegin',`
	<div class="boxmanDish2__decoR">
    <img src="img/gallery/deco_block3.png" class="w-100 h-auto" alt="">
    </div>
    <div class="boxmanDish2__decoL">
    <img src="img/gallery/deco_block4.png" class="w-100 h-auto" alt="">
    </div>`)
})


//待資料讀入
window.addEventListener("load", function(event) {

	//lading移除
	var loadingRemove = gsap.timeline();
	loadingRemove.to(".loading", {delay:.1,duration: 1 ,y:'-100vh',opacity:0,});
	loadingRemove.to(".loading", {display:"none"});

	// 側選單輪播
	var mytopSwiper = new Swiper('#merchandise .swiper-container', {
		effect : 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: true,
		loop: true,
		slidesPerView: 1,
	});

	// 大牌輪播
	var brandSwiper = new Swiper('#bigBrand .swiper-container', {
		spaceBetween: -50,
		centeredSlides: true,
		slidesPerView: 3,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '#bigBrand .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '#bigBrand .swiper-button-next',
			prevEl: '#bigBrand .swiper-button-prev'
		},
		breakpoints: {
			900: {
				spaceBetween: -40,
			},
			767: {
				spaceBetween: -30,
			},
			414: {
				spaceBetween: -20,
			},
		}
	});

	// 版頭輪播PC
	pcSwiper = new Swiper('#kvSlider>.kvSlider_pc', {
		loop: true,
		speed: 800,
		effect : 'flip',
		flipEffect: {
			slideShadows : false,
			limitRotation : true,
		},
		autoplay: {
			delay: 2400,
			disableOnInteraction: false
		},
		pagination: {
			el: '#kvSlider>.kvSlider_pc .swiper-pagination',
			clickable :true,
		},
	});

	// 版頭輪播MB
	mbSwiper = new Swiper('#kvSlider>.kvSlider_mb', {
		loop: true,
		speed: 800,
		effect : 'flip',
		flipEffect: {
			slideShadows : false,
			limitRotation : true,
		},
		autoplay: {
			delay: 2400,
			disableOnInteraction: false
		},
		pagination: {
			el: '#kvSlider>.kvSlider_mb .swiper-pagination',
			clickable :true,
		},
	});

	//跳跳虎入場
	gsap.from(".deco__tiger img", {
		x:'105%',
		y:'90%',
		opacity: 0,
		duration: 1,
		delay: 1.2,
	});

	//小飛虎入場
	gsap.to(".deco__boxmanTiger", {
		zIndex:10,
		duration: .1,
		delay:1.8,
	});
	gsap.from(".deco__boxmanTiger img", {
		x:300,
		y:-150,
		opacity: 0,
		duration: 1,
		delay:1.7,
	});
	gsap.to(".deco__boxmanTiger img", {
		x:-3,
		y:-8,
		duration: 1.5,
		delay:3.5,
		yoyo:true,
		repeat: -1,
	});
	
	//入場動畫
	gsap.from(".title__main", {
		duration: 1.2,
		scale: 1.5,
		y: -300,
		delay:.2,
		ease: Bounce.easeOut,
	});
	gsap.from("#kvSlider .swiper-container", {
		duration: 1.2,
		delay: 1.2,
		y: 500,
		scale: 1.1,
		ease: Elastic.easeOut.config(1, 0.3),
	});
	gsap.from(".deco__table img", {
		duration: 1,
		delay: .8,
		y: 300,
		ease: Elastic.easeOut.config(1, 0.3),
	});

	//待資料讀入 & DOM高度載入
	setTimeout(function(){
		// 區塊boxman菜盤裝飾 捲軸滾到時跑動畫
		window.sr = new ScrollReveal({
			distance: '80px',
			easing: 'ease-in',
			opacity: 0,
			duration: 800,
			interval: 120,
			mobile: false,
			reset: true,
		});
		sr.reveal('.boxmanDish1 .boxmanDish1__decoR img', {
			origin: 'left',
			rotate: { z:-5 },
			distance: '300px',
			scale: 0.5,
		});
		sr.reveal('.boxmanDish1 .boxmanDish1__decoL img', {
			origin: 'right',
			rotate: { z: 5 },
			distance: '300px',
			scale: 0.5,
		});
		sr.reveal('.boxmanDish2 .boxmanDish2__decoR img', {
			origin: 'left',
			rotate: { z:-5 },
			distance: '300px',
			scale: 0.5,
		});
		sr.reveal('.boxmanDish2 .boxmanDish2__decoL img', {
			origin: 'right',
			rotate: { z: 5 },
			distance: '300px',
			scale: 0.5,
		});

		//移除春節主題曲裝飾圖連結
		var newyearThemeDOM = document.querySelector('#newyearTheme li:nth-of-type(1) a')
		if(newyearThemeDOM){
			newyearThemeDOM.removeAttribute('href')
		}
	},600)
});

//jQuery下紅包
var imgEcm  = "img/gallery/";
$(function(options){
	var $flake1			= $('<div id="snowbox" class="snowbox snowbox1" />').css({'position': 'fixed', 'top': '-10px', 'z-index': '1'}).html('<img style="  width:100%;  height:auto;" src="'+ imgEcm +'deco_redL.png"/>'),
		documentHeight 	= $(window).height(),
		documentWidth	= $(document).width(),
		defaults		= {
							minSize		: 40, //圖最小尺寸
							maxSize		: 40, //圖最大尺寸
							newOn		: 1000, //幾毫秒產生新的
							flakeColor	: "#FFFFFF"	
						},
		options			= $.extend({}, defaults, options);
	//圖片1
	var interval		= setInterval( function(){
		var startPositionLeft 	= Math.random() * documentWidth - 100,
			startOpacity		= 1 + Math.random(),
			sizeFlake			= options.minSize,
			endPositionTop		= documentHeight - 40,
			endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
			durationFall		= documentHeight * 10 + Math.random() * 50,
			starttransform		= Math.random()*500;
				
			$flake1.clone().appendTo('.snowArea').css({
						left: startPositionLeft,
						opacity: startOpacity,
						'width': sizeFlake +"px" ,
						'font-size': sizeFlake,
						color: options.flakeColor,
					}).animate({
						top: endPositionTop,
						left: endPositionLeft,
						opacity: 1
					},durationFall,'linear',function(){
						$(this).remove()
					}
				).find('img').css({
					'-webkit-transform': 'rotate('+ starttransform +'deg)',
					'transform': 'rotate('+ starttransform +'deg)'
				});
	}, options.newOn);
});

//小動物跳動
function animalAni(OBJ, repeatDelayS, delayS, jumpH) {
	let obj = gsap.timeline({repeat: -1, repeatDelay: repeatDelayS, delay: delayS})
	obj.to(OBJ+" img", {
		duration: .3,
		y: jumpH,
		scale: 1,
	});
	obj.to(OBJ+" img", {
		duration: .3,
		y:0,
		scale: 1,
	});
}
animalAni('.deco__dog' , 1, 0, -15)
animalAni('.deco__panda' , 1.5, .3, -10)

//隨捲軸移動
const blueWave = gsap.timeline({defaults: {duration: 1},
	scrollTrigger: {
		trigger: "header",
		scrub: true,
		start: "top top",
		end: "bottom 15%",
	}})
	.to(".deco__texture img", {scaleX:1.2,y:-20})

const animals = gsap.timeline({
    scrollTrigger: {
		trigger: "header",
		pin: false,   // pin the trigger element while active
		start: "top top", // when the top of the trigger hits the top of the viewport
		end: "+=500px", // end after scrolling 500px beyond the start
		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
});
// add animations and labels to the timeline
animals
	.addLabel("start")
	.to(".deco__frog img", { x:-100, y:15 })
	.addLabel("ani01")
	.to(".deco__rabbit img", { x:100, y:15 },"start")
	.addLabel("ani02")
	.to(".deco__plumL img", { x:100, y:20 },"start")
	.addLabel("ani03")
	.to(".deco__plumR img", { x:-140, y:40 },"start")
	.addLabel("end");

//城市們 滾輪視差圖
var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
	selector: '.layer'
});