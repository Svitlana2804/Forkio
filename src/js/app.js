
import BaseHelpers from './helpers/BaseHelpers.js';

BaseHelpers.checkWebpSupport();

$(document).ready(function () {
  $('.header__burger').click(function (e) {
    $(document).click(function (e) {
      if (!e.target.closest('.header__burger,.header__menu')) {
        $('.header__burger,.header__menu').removeClass('active');
        $(document).off('click');
      }
    });
    $('.header__burger,.header__menu').toggleClass('active');

    console.log(e.target);
  });
})
