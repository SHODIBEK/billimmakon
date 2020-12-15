import './vendor';

$(document).ready(() => {
	let $window = $(window);
	let $body = $('body');
	let $projectSlider = $('.project-slider.owl-carousel');
	let $lamp = $('.section-five');
	let $projectsSlider = $('.project.owl-carousel');
	let $menuBtn = $('#menuBtn');
	let $logo = $('.header-logo img');
	let $preloaderLogo = $('.preloader-wrapper img');

	$.fn.delay = function (time, callback) {
		$.fx.step.delay = function () {};

		return this.animate({delay: 1}, time, callback);
	};
	$('.preloader').delay(2500).slideToggle('slow');

	function runParallax() {
		let scene = $('#scene').get(0);

		if (scene) {
			let parallaxInstance = new Parallax(scene);
		}
	}

	function counter(event) {
		let items = event.item.count; // Number of items
		let item = event.item.index + 1; // Position of the current item

		if (items < 10) {
			$('.project-slider-counter').html(`<span>0${item}</span> <sup>/0${items}</sup>`);
		} else if (item < 10) {
			$('.project-slider-counter').html(`<span>0${item}</span> <sup>/${items}</sup>`);
		} else {
			$('.project-slider-counter').html(`<span>${item}</span> <sup>/${items}</sup>`);
		}
	}

	$projectSlider.owlCarousel({
		items: 1,
		margin: 20,
		dots: false,
		nav: true,
		animateOut: 'fadeOut',
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="6.532" height="11.5" viewBox="0 0 6.532 11.5"><path style="fill-rule: evenodd;" d="M732.164,2919.19a1.311,1.311,0,0,1,.373-0.68l4.723-4.91a0.908,0.908,0,0,1,1.186.14h0a1.175,1.175,0,0,1,0,1.36l-3.283,3.41v1.36l3.283,3.41a1.175,1.175,0,0,1,0,1.36h0a0.926,0.926,0,0,1-1.2.12l-4.706-4.89A1.353,1.353,0,0,1,732.164,2919.19Z" transform="translate(-732.156 -2913.44)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="6.468" height="11.53" viewBox="0 0 6.468 11.53"><path style="fill-rule: evenodd;" d="M738.644,2861.73a1.355,1.355,0,0,0-.371-0.68l-4.707-4.9a0.9,0.9,0,0,0-1.181.13h0a1.177,1.177,0,0,0,0,1.36l3.271,3.41v1.37l-3.271,3.4a1.192,1.192,0,0,0,0,1.37h0a0.917,0.917,0,0,0,1.2.11l4.691-4.88A1.377,1.377,0,0,0,738.644,2861.73Z" transform="translate(-732.188 -2855.97)"/></svg>'],
		onInitialized: counter,
		onTranslated: counter,
	});

	$projectsSlider.owlCarousel({
		loop: true,
		dots: false,
		nav: false,
		margin: 0,
		responsive: {
			0: {
				items: 1,
			},
			667: {
				items: 2,
			},
			1440: {
				items: 3,
			},
		},
	});

	$projectsSlider.on('mousewheel', '.owl-stage', (e) => {
		let htmlLang = $('html').attr('lang');
		let logo = $('.wrapper').find('.header-logo').children().children();
		let myWhite = 'rgb(28, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box';

		if (e.deltaY > 0) {
			$projectsSlider.trigger('next.owl');
			let testing = $projectsSlider.find('.owl-item.active').css('background');

			if (testing === myWhite) {
				if (htmlLang == 'ru') {
					logo.attr('src', '../logo/logo-ru.svg');
				} else if (htmlLang == 'en') {
					logo.attr('src', '../logo/logo-en.svg');
				} else if (htmlLang == 'uz') {
					logo.attr('src', '../logo/logo.svg');
				}
			} else if (htmlLang == 'ru') {
				logo.attr('src', '../logo/logo-ru-2.svg');
			} else if (htmlLang == 'en') {
				logo.attr('src', '../logo/logo-en-2.svg');
			} else if (htmlLang == 'uz') {
				logo.attr('src', '../logo/logo-2.svg');
			}
		} else {
			$projectsSlider.trigger('prev.owl');

			let _testing = $projectsSlider.find('.owl-item.active').css('background');

			if (_testing === myWhite) {
				if (htmlLang == 'ru') {
					logo.attr('src', '../logo/logo-ru.svg');
				} else if (htmlLang == 'en') {
					logo.attr('src', '../logo/logo-en.svg');
				} else if (htmlLang == 'uz') {
					logo.attr('src', '../logo/logo.svg');
				}
			} else if (htmlLang == 'ru') {
				logo.attr('src', '../logo/logo-ru-2.svg');
			} else if (htmlLang == 'en') {
				logo.attr('src', '../logo/logo-en-2.svg');
			} else if (htmlLang == 'uz') {
				logo.attr('src', '../logo/logo-2.svg');
			}
		}

		e.preventDefault();
	});

	function langChange() {
		let htmlLang = $('html').attr('lang');
		switch (htmlLang) {
			case 'ru':
				$logo.attr('src', '/logo/logo-ru.svg');
				$preloaderLogo.attr('src', '/logo/logo-ru.svg');
				break;
			case 'uz':
				$logo.attr('src', '/logo/logo.svg');
				$preloaderLogo.attr('src', '/logo/logo.svg');
				break;
			case 'en':
				$logo.attr('src', '/logo/logo-en.svg');
				$preloaderLogo.attr('src', '/logo/logo-en.svg');
				break;
			default:
				$logo.attr('src', '/logo/logo-ru.svg');
				$preloaderLogo.attr('src', '/logo/logo-ru.svg');
		}
	}

	langChange();

	function lampPosition() {
		if ($lamp.length) {
			$window.scroll(() => {
				let lampPos = $lamp.offset().top + $lamp.outerHeight();
				let windowPos = $window.scrollTop() + $window.height();
				if (windowPos >= lampPos) {
					$lamp.addClass('section-five--scrolled');
				} else {
					$lamp.removeClass('section-five--scrolled');
				}
			});
		}
	}

	function mobileMenuTrigger() {
		$menuBtn.on('click', (e) => {
			let $this = $(e.currentTarget);
			$this.toggleClass('menuBtn--active');
			$('.header-nav-bottom').slideToggle();
			$body.toggleClass('menu--open');
		});
		$('.nav-link').on('click', (event) => {
			let $this = $(event.currentTarget);

			$this.next().slideToggle();
		});
	}

	function langTrigger() {
		$('.lang-currentList a').on('click', (e) => {
			let $this = $(e.currentTarget);
			$(e.preventDefault);
			$this.closest('.lang').toggleClass('lang--active');
		});
	}

	function tableScroll() {
		let e = $('.default-section table');

		$window.scroll(() => {
			console.log('scroll');
			if (e.length === 1) {
				$('.swipe-table').length === 0 && $('body').append('<div class="swipe-table"><span class="swipe_table"></span></div>');
				console.log('ok');
				let a = e.offset();
				let t = e.innerHeight();
				let i = a.top + t;
				let s = $(window).scrollTop() + $(window).height();

				let l = a.top + (t - 100) / 2;

				i < s && ($('.swipe-table').css({
					top: l,
				}), $('.swipe-table').fadeIn('slow'), setTimeout(() => {
					$('.swipe-table').fadeOut('slow');
				}, 1000));
			}
		});
	}

	function toggleBox() {
		$('.box-toggle-block').on('click', (e) => {
			let $this = $(e.currentTarget);
			$this.toggleClass('box-toggle--active');
			$this.next().slideToggle();
			$this.closest('.box-toggle-item').siblings().find('.box-toggle--active').removeClass('box-toggle--active');
			$this.closest('.box-toggle-item').siblings().find('.box-toggle-content').slideUp();
		});
	}

	function searchModalOpen() {
		$('.search-icon').on('click', () => {
			$('.search-modal').fadeIn();
		});
		$('.search-modal').on('click', '.close', (e) => {
			let $this = $(e.currentTarget);
			$this.closest('.modal').fadeOut();
		});
	}

	// Ввод в input[type="tel"] только цифр
	let telInput = document.querySelectorAll('input[type="tel"]');

	function dpcm(input) {
		let value = input.value;
		let re = /[^0-9\-\(\)\+\' ']/gi;
		if (re.test(value)) {
			value = value.replace(re, '');
			input.value = value;
		}
	}

	for (let i = 0; i < telInput.length; i++) {
		telInput[i].oninput = function () {
			dpcm(this);
		};
	}
	// !Ввод в input[type="tel"] только цифр

	if ($window.width() > 1170) {
		runParallax();
	} else if ($window.width() < 768) {
		tableScroll();
	}

	let $scrollTop = $('#button-top');

	$(window).scroll(() => {
		if ($(window).scrollTop() < 50) {
			$scrollTop.slideUp(500);
			$scrollTop.removeClass('showrocket');
		} else {
			$scrollTop.slideDown(500);
			$scrollTop.addClass('showrocket');
		}
	});

	$scrollTop.click(function () {
		$('html, body').animate({scrollTop: '0px',
			display: 'none'}, {
			duration: 600,
			easing: 'linear',
		});

		let self = $(this);
		self.addClass('launchrocket');
		setTimeout(() => {
			self.addClass('showrocket').removeClass('launchrocket');
		}, 800);
	});

	$('data-fancybox').fancybox({
		afterShow(instance, slide) {
			console.log(slide)
		},
		lang: 'ru',
		i18n: {
			en: {
				CLOSE: 'Close',
				NEXT: 'Next',
				PREV: 'Previous',
				ERROR: 'The requested content cannot be loaded. <br/> Please try again later.',
				PLAY_START: 'Start slideshow',
				PLAY_STOP: 'Pause slideshow',
				FULL_SCREEN: 'Full screen',
				THUMBS: 'Thumbnails',
				DOWNLOAD: 'Download',
				SHARE: 'Share',
				ZOOM: 'Zoom',
			},
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Следующий',
				PREV: 'Предыдущий',
				ERROR: 'Запрошенный контент не может быть загружен. <br/> Повторите попытку позже.',
				PLAY_START: 'Начать слайд-шоу',
				PLAY_STOP: 'Приостановить слайд-шоу',
				FULL_SCREEN: 'Полноэкранный',
				THUMBS: 'Миниатюры',
				DOWNLOAD: 'Скачать',
				SHARE: 'Поделиться',
				ZOOM: 'Увеличить',
			},
			uz: {
				CLOSE: 'Йопиш',
				NEXT: 'Кейинги',
				PREV: 'Олдинги',
				ERROR: 'Сўралган маълумотни йуклаб бўлмади. <br/> Илтимос, кейинрок қайта уриниб кўринг.',
				PLAY_START: 'Слайд-шоуни йокиш',
				PLAY_STOP: 'Слайд-шоуни тўхтатиш',
				FULL_SCREEN: 'Тўлик экран',
				THUMBS: 'Миниатуралар',
				DOWNLOAD: 'Кўчириш',
				SHARE: 'Бахам кўриш',
				ZOOM: 'Катталаштириш',
			},
		},
	});

	langTrigger();
	mobileMenuTrigger();
	lampPosition();
	toggleBox();
	searchModalOpen();
});
