/*
Template Name: 
Author: Rogatnev Nikita
Version: 1.0.0
Tags: 
*/

$(document).ready(function() {

    /* ------------------------------------------ */
    /*  MENU OVERLAY & HAMBURGER ICON ACTIVE
    /* ------------------------------------------ */
    $(".main-header__hamburger").click(function() {
        if ($("body").hasClass("modal-open")) {
            $(".modal-backdrop").fadeOut("normal", function() {
                $(this).remove();
            });
            $("body").removeClass('modal-open');
            $(".main-header__hamburger").removeClass('main-header__hamburger--active');
        }
        else {
            $('<div class="modal-backdrop"></div>').fadeIn().appendTo(document.body);
            $("body").addClass('modal-open');
            $(".main-header__hamburger").addClass('main-header__hamburger--active');
        }
    });


    /* ------------------------------------------ */
    /*  LEGAL COLLAPSE - CHANGE DISPLAY OF THE BUTTON
    /* ------------------------------------------ */
    $(".main-footer__legal-toggle[data-toggle='collapse']").click(function() {
        if ($(this).html() == '<i class="fa fa-chevron-up"></i> HIDE LEGAL') {
            $(this).html('<i class="fa fa-chevron-down"></i> LEGAL');
            $(".main-footer").css("background", "rgba(0, 0, 0, 0)");
        }
        else {
            $(this).html('<i class="fa fa-chevron-up"></i> HIDE LEGAL');
            $(".main-footer").css("background", "rgba(0, 0, 0, 1)");
        }
    });


    /* ------------------------------------------ */
    /*  MUTE BUTTON
    /* ------------------------------------------ */
    $("video").prop('muted', false);
    $(".main-footer__icons-volume").click( function (){
        if( $("video").prop('muted') ) {
            $("video").prop('muted', false);
            
            $(".main-footer__icons-volume").addClass('fa-volume-up');
            $(".main-footer__icons-volume").removeClass('fa-volume-off');
        }
        else {
            $("video").prop('muted', true);
            
            $(".main-footer__icons-volume").addClass('fa-volume-off');
            $(".main-footer__icons-volume").removeClass('fa-volume-up');
        }
    });


    /* ------------------------------------------ */
    /*  HOME SLIDER
    /* ------------------------------------------ */










});