/*
Template Name: MOOVY
Author: Rogatnev Nikita
Version: 1.0.0
Tags: bootstrap, entertainment, film, movie, trailer, video, showcase, tv, clean, dark
*/

/* ------------------------------------------ */
/*             TABLE OF CONTENTS
/* ------------------------------------------ */
/*  01 — MENU OVERLAY &amp; HAMBURGER ICON ACTIVE           */
/*  02 — LEGAL COLLAPSE - CHANGE DISPLAY OF THE BUTTON      */
/*  03 — NEWS AND CREW HEADING SCROLL ANIMATION             */
/*  04 — STOP VIDEO WHEN MODAL CLOSE                        */
/*  05 — HOME SLIDER                                        */
/*  06 — IMAGES MODAL AT NEWS PAGE                          */
/*  07 — ONEPAGE SCROLL                                     */
"use strict";

jQuery(document).ready(function () {

	/* ------------------------------------------ */
	/*  01 - MENU OVERLAY & HAMBURGER ICON ACTIVE
	/* ------------------------------------------ */
	jQuery(".main-header__hamburger").click(function () {
		if (jQuery("body").hasClass("modal-open")) {
			jQuery(".modal-backdrop").fadeOut("normal", function () {
				jQuery(this).remove();
			});
			jQuery("body").removeClass('modal-open');
			jQuery(".main-header__hamburger").removeClass('main-header__hamburger--active');
		} else {
			jQuery('<div class="modal-backdrop"></div>').fadeIn().appendTo(document.body);
			jQuery("body").addClass('modal-open');
			jQuery(".main-header__hamburger").addClass('main-header__hamburger--active');
		}
	});

	/* ------------------------------------------ */
	/*  02 - LEGAL COLLAPSE - CHANGE DISPLAY OF THE BUTTON
	/* ------------------------------------------ */
	jQuery(".main-footer__legal-toggle[data-toggle='collapse']").click(function () {
		if (jQuery(this).html() == '<i class="fa fa-chevron-down"></i> HIDE LEGAL') {
			jQuery(this).html('<i class="fa fa-chevron-up"></i> LEGAL');
			jQuery(".main-footer").css("background", "rgba(0, 0, 0, 0)");
		} else {
			jQuery(this).html('<i class="fa fa-chevron-down"></i> HIDE LEGAL');
			jQuery(".main-footer").css("background", "rgba(0, 0, 0, 1)");
		}
	});

	/* ------------------------------------------ */
	/*   03 - STOP VIDEO WHEN MODAL CLOSE
	/* ------------------------------------------ */
	jQuery(".modal").on("hidden.bs.modal", function () {
		jQuery('.modal video').attr("src", jQuery(".modal video").attr("src"));

		var src = jQuery(this).find('iframe').attr('src');
		jQuery(this).find('iframe').attr('src', '');
		jQuery(this).find('iframe').attr('src', src);
		var videosOnPage = 2;
		for (i = 0; i < videosOnPage; i++) {
			jQuery(".video-player")[i].load();
		}
		return false;
	})

	/* ------------------------------------------ */
	/*  04 - READ MORE COLLAPSE - CHANGE DISPLAY OF THE BUTTON
	/* ------------------------------------------ */
	jQuery(".crew__read-more[data-toggle='collapse']").click(function () {
		if (jQuery(this).html() == '<span></span>roll up') {
			jQuery(this).html('<span></span>read more');
		} else {
			jQuery(this).html('<span></span>roll up');
		}
	});
	jQuery(".news__read-more[data-toggle='collapse']").click(function () {
		if (jQuery(this).html() == '<span></span>roll up') {
			jQuery(this).html('<span></span>read more');
		} else {
			jQuery(this).html('<span></span>roll up');
		}
	});

	/* ------------------------------------------ */
	/*  05 - HOME SLIDER
	/* ------------------------------------------ */
	var backgrounds;
	var body = jQuery('body');
	if (body.hasClass('home-page')) {
		if (window.matchMedia('(max-width: 767px)').matches) {
			backgrounds = [
				'url(./images/home/home__bg_1--mobile.jpg)',
				'url(./images/home/home__bg_2--mobile.jpg)',
				'url(./images/home/home__bg_3--mobile.jpg)',
				'url(./images/home/home__bg_4--mobile.jpg)',
				'url(./images/home/home__bg_5--mobile.jpg)',
				'url(./images/home/home__bg_6--mobile.jpg)',
				'url(./images/home/home__bg_7--mobile.jpg)'
			];
		} else {
			backgrounds = [
				'url(./images/home/home__bg_1.jpg)',
				'url(./images/home/home__bg_2.jpg)',
				'url(./images/home/home__bg_3.jpg)',
				'url(./images/home/home__bg_4.jpg)',
				'url(./images/home/home__bg_5.jpg)',
				'url(./images/home/home__bg_6.jpg)',
				'url(./images/home/home__bg_7.jpg)'
			];
		}
		var navigation = jQuery(".slider-navigation-line");
		var selectItem = function (index) {
			body.css('background-image', backgrounds[index]);
			navigation.removeClass('slider-navigation-line--active');
			navigation.eq(index).addClass('slider-navigation-line--active');
		};
		var createHandler = function (index) {
			return function () {
				selectItem(index);
			};
		};
		selectItem(0);
		for (var i = 0; i < backgrounds.length; i++) {
			navigation.eq(i).click(createHandler(i));
		}

		var i = 1;
		setInterval(function () {
			if (i < backgrounds.length) {
				selectItem(i);
				i = i + 1;
			} else {
				i = 0;
				selectItem(i);
				i = i + 1;
			}
		}, 2000);

	}

	/* ------------------------------------------ */
	/*   06 - IMAGES MODAL AT NEWS PAGE
	/* ------------------------------------------ */
	jQuery('.collapse__gallery-item').on('click', function () {
		jQuery('.modal-box__image').attr('src', jQuery(this).attr('src'));
		jQuery('#images').modal('show');
	});

	/* ------------------------------------------ */
	/*   07 - ONEPAGE SCROLL
	/* ------------------------------------------ */
	if (jQuery('body').hasClass('video-page') || jQuery('body').hasClass('gallery-page') || jQuery('body').hasClass('crew-page') || jQuery('body').hasClass('news-page')) {

		jQuery(".slider-navigation-number:nth-child(2)").text('1');
		jQuery(".slider-navigation-number:nth-child(4)").text(jQuery("main > section").length);

		jQuery(".main").onepage_scroll({
			sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
			easing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
			// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
			animationTime: 1000, // AnimationTime let you define how long each section takes to animate
			pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
			updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
			beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
			afterMove: function (index) {
				if (jQuery('main > section').hasClass('active')) {
					jQuery(".slider-navigation-number:nth-child(2)").text(jQuery('section.active').attr('data-index'));
				}
				if (!jQuery('main > section:first-child, main > section:last-child').hasClass('active')) {
					jQuery(".slider-navigation-number--arrow:first-child").removeClass('slider-navigation-number--disabled');
					jQuery(".slider-navigation-number--arrow:last-child").removeClass('slider-navigation-number--disabled');
				}
				if (jQuery('main > section:first-child').hasClass('active')) {
					jQuery(".slider-navigation-number--arrow:first-child").addClass('slider-navigation-number--disabled');
					jQuery(".slider-navigation-number--arrow:last-child").removeClass('slider-navigation-number--disabled');
				}
				if (jQuery('main > section:last-child').hasClass('active')) {
					jQuery(".slider-navigation-number--arrow:first-child").removeClass('slider-navigation-number--disabled');
					jQuery(".slider-navigation-number--arrow:last-child").addClass('slider-navigation-number--disabled');
				}
				if (jQuery('body').hasClass('viewing-page-1')) {
					jQuery(".slider-navigation-number--arrow:first-child").addClass('slider-navigation-number--disabled');
				}
			}, // This option accepts a callback function. The function will be called after the page moves.
			loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
			keyboard: true, // You can activate the keyboard controls
			responsiveFallback: true, // You can fallback to normal page scroll by defining the width of the browser
		});

	};

});
