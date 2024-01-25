$(document).ready(function() {
    // responsive menu toggle
    $("#menutoggle").click(function() {
        $('.xs-menu').toggleClass('displaynone');
    });

    // drop down menu for Equipos
    $(".drop-down.equipos").hover(function() {
        // Add class for showing the Equipos content
        $('.mega-menu-equipos').addClass('display-on'); 
    });

    $(".drop-down.equipos").mouseleave(function() {
        // Remove class when leaving Equipos
        $('.mega-menu-equipos').removeClass('display-on');
    });

// drop down menu for Equipos
    $(".drop-down.partidos").hover(function() {
        // Add class for showing the Equipos content
        $('.mega-menu-partidos').addClass('display-on'); 
    });

    $(".drop-down.partidos").mouseleave(function() {
        // Remove class when leaving Equipos
        $('.mega-menu-partidos').removeClass('display-on');
    });
    // drop down menu for Clasificacion
    $(".drop-down.clasificacion").hover(function() {
        // Add class for showing the Clasificacion content
        $('.mega-menu-clasificacion').addClass('display-on'); 
    });

    $(".drop-down.clasificacion").mouseleave(function() {
        // Remove class when leaving Clasificacion
        $('.mega-menu-clasificacion').removeClass('display-on');
    });

$(".drop-down.noticias").hover(function() {
        // Add class for showing the Clasificacion content
        $('.mega-menu-noticias').addClass('display-on'); 
    });

    $(".drop-down.noticias").mouseleave(function() {
        // Remove class when leaving Clasificacion
        $('.mega-menu-noticias').removeClass('display-on');
    });
    const carSld = document.getElementById("carrusel-slides");
const carSlds = document.querySelector("#carrusel-slides .slide");
const carRight = document.querySelector(".btn-next");
const carLeft = document.querySelector(".btn-prev");
let direction;

carRight.onclick = function () {
  carSld.scrollLeft += 220;  
};

carLeft.onclick = function () {
  carSld.scrollLeft -= 220;
};

});


	 
	 