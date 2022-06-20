import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

import '../sass/main.scss';

import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import '@fancyapps/fancybox';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import 'jquery-mask-plugin';
//import 'jquery-validation';

import 'calc-polyfill/calc.min';
import 'picturefill';

import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos.js';

jQuery(document).ready(function($){

    $('.owl-home').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        responsive : {
            0 : {
                items:1
            },
            768 : {
                items:2
            },
            1024 : {
                items:4
            }
        }
    });  

    var owl = $('.owl-home');
    owl.owlCarousel();

    $('.customNextBtn').click(function(e) {
        e.preventDefault;
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function(e) {
        e.preventDefault;
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('#customRange1').change(function(){
        var valor = $(this).val();
        alert(valor);
    });

    var slider = document.getElementById("slider");

    slider.oninput = function() {
        $('.count').text(this.value).css({
            'left': this.value / 10 + '%', 
            'transform': 'translateX(-' + this.value / 10 + '%)'
        });
        $('.fill').css('width', this.value / 10 + '%');
    }

    $('#preco').mask('000.000.000.000.000,00', {reverse: true});

    $('.calculadora form').submit(function(){
        var ted = document.getElementById("slider").value;
        var preco = document.getElementById("preco").value;
        var valor = ted * parseInt(preco);
        var valor = valor * 0.53;

        $('.recebeDesconto').html(Math.round(valor * 100) / 100);
        $.fancybox.open( $('#hidden-content'), {
            touch: false
        }); 
        return false; 
    });

     
});
