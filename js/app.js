import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


//прокрутка при клике:
const menuLinks = document.querySelectorAll('.menu-row__link[data-goto], .footer__streloshka[data-goto], .mainblock__arrow[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
         
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}


/* $('.filter__item').click(function(event) {
      var i =$(this).data('filter');
   if (i==1) {
      $('portfolio__collumn').show();
   }else{
      $('portfolio__collumn').hide();
      $('portfolio__collumn.a_'+i).show();
   }
   $('.filter__item').removeClass('active');
   $(this).addClass('active');

   return false;
}); */


/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/