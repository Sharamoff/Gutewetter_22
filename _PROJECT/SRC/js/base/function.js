//tooltips

$('[data-toggle="tooltip"]').tooltip();



//mainsearch

$('.mainsearch-btn').on('click', function () {
  $('header').addClass('showsearch ');
  $('.header__mainsearch-form').addClass('active');
  $('#fld_mainsearch').focus();
});

$('.mainsearch-form__close').on('click', function () {
  $('header').removeClass('showsearch');
  $('.header__mainsearch-form').removeClass('active');
});

$('.mainsearch-form__search').on('click', function () {
  $('header').removeClass('showsearch');
  $('.header__mainsearch-form').removeClass('active');
});

$(window).resize(function() {
  if ($(document).width() < 767) {
    $('.header__mainsearch-form').removeClass('active');
    $('header').removeClass('showsearch');
  }
});



//menu-item dropdown any

$('.menu-item.dropdown a').on('click', function () {
  $('#id_menuregion').modal('hide');
  $('#id_menucatalog').modal('hide');
  $('body').removeClass('modal-open');
});


//menumain-md

$('.header__menumain-md').on('click', function () {
  $('.animated-icon').toggleClass('open');
  $('#id_menuregion').modal('hide');
  $('#id_menucatalog').modal('hide');
});
$('#id_menumain-md').on('shown.bs.collapse', function (e) {
  $('header').addClass('showmenus');
  $('.animated-icon').addClass('open');
  $('body').addClass('modal-open');
});
$('#id_menumain-md').on('hidden.bs.collapse', function (e) {
  $('header').removeClass('showmenus');
  $('.animated-icon').removeClass('open');
  $('body').removeClass('modal-open');
});



//menuregion

$('#id_toggle-menuregion').on('click', function () {
  $(this).toggleClass('open');
  $('#id_menuregion').modal('toggle');
});
$('#id_menuregion').on('shown.bs.modal', function (e) {
  $('header').addClass('showmenus');
  $('#id_menumain-md').removeClass('show');
  $('#id_menucatalog').modal('hide');
  $('body').addClass('modal-open');
});
$('#id_menuregion').on('hidden.bs.modal', function (e) {
  $('header').removeClass('showmenus');
  $('#id_menumain-md').removeClass('show');
  $('.animated-icon').removeClass('open');
  $('#id_toggle-menuregion').removeClass('open');
  $('body').removeClass('modal-open');
});


//menucatalog

$('#id_toggle-menucatalog').on('click', function () {
  $(this).toggleClass('open');
  $('#id_menucatalog').modal('toggle');
});
$('#id_menucatalog').on('shown.bs.modal', function (e) {
  $('header').addClass('showmenus');
  $('#id_menumain-md').removeClass('show');
  $('.animated-icon').removeClass('open');
  $('#id_menuregion').modal('hide');
  $('body').addClass('modal-open');
});
$('#id_menucatalog').on('hidden.bs.modal', function (e) {
  $('header').removeClass('showmenus');
  $('#id_toggle-menucatalog').removeClass('open');
  $('body').removeClass('modal-open');
});



// slider actions

$('#id_idx-actions').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '50px'
      }
    }
  ]
});



// slider reference

$('#id_idx-reference').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        centerMode: true,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px'
      }
    }
  ]
});

