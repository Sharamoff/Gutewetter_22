/* main */
$(document).ready(function () {

//tooltips

$('[data-bs-toggle="tooltip"]').tooltip();



//mainsearch

$('.mainsearch-btn').on('click', function () {
  $('header').addClass('showsearch ');
  $('.header__mainsearch-form').addClass('active');
  $('#fld_mainsearch').focus();
});

$('.mainsearch-form__close, .pagesection, footer, .barbtm').on('click', function () {
  $('header').removeClass('showsearch');
  $('.header__mainsearch-form').removeClass('active');
});

$('.mainsearch-form__search').on('click', function () {
  $('header').removeClass('show-search');
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

$('#id_toggle-menuregion, #id_productcart-region').on('click', function () {
  $(this).toggleClass('open');
  $('#id_menuregion').modal('toggle');
});
$('#id_menuregion').on('shown.bs.modal', function (e) {
  $('.animated-icon').addClass('open');
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
$(' #id_menu-item-menucatalog').on('click', function () {
  $('#id_menucatalog').modal('toggle');
  $('#id_toggle-menucatalog').addClass('open');
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



// breadcrumb fix

$(window).scroll(function () {
  if($(this).scrollTop() > 40) {
    $('.panel-breadcrumb').addClass('fixed-top');
    $('.breadcrumb__hdr').addClass('collapsed');
    $('.breadcrumb-submenu').removeClass('show');
  } else {
    $('.panel-breadcrumb').removeClass('fixed-top')
  }
});

// breadcrumb panel

$('header, .pagesection, footer, .barbtm').on('click', function () {
  $('.breadcrumb-submenu').removeClass('show');
  $('.breadcrumb__hdr').addClass('collapsed');
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


// filter-form icon check
$('.form__item').on('click', function () {
  $('.form__item').removeClass('check');
  $(this).toggleClass('check');
});



// filter-form slider

$('#id_filter-form').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 546,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});



// filter range sliders

$('#id_inputslider-l').slider({
  min: 50,
  max: 800,
  values: [300, 700],
  range: true,
  stop: function(event, ui) {
    $('input#id_inputval-l1').val($(this).slider('values', 0));
    $('input#id_inputval-l2').val($(this).slider('values', 1));
  },
  slide: function(event, ui){
    $('input#id_inputval-l1').val($(this).slider('values', 0));
    $('input#id_inputval-l2').val($(this).slider('values', 1));
  }
});
$('input#id_inputval-l1').change(function(){
  var value1=$(this).val();
  var value2=$('input#id_inputval-l2').val();
  if(parseInt(value1) < 50) {value1 = 50;}
  if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    $(this).val(value1);
  }
  $('#id_inputslider-l').slider('values', 0, value1);
});
$('input#id_inputval-l2').change(function(){
  var value1=$('input#id_inputval-l1').val();
  var value2=$(this).val();
  if (value2 > 700) {value2 = 700;}
  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    $(this).val(value2);
  }
  $('#id_inputslider-l').slider('values', 1, value2);
});

$('#id_inputslider-w').slider({
  min: 50,
  max: 250,
  values: [70, 120],
  range: true,
  stop: function(event, ui) {
    $('input#id_inputval-w1').val($(this).slider('values', 0));
    $('input#id_inputval-w2').val($(this).slider('values', 1));
  },
  slide: function(event, ui){
    $('input#id_inputval-w1').val($(this).slider('values', 0));
    $('input#id_inputval-w2').val($(this).slider('values', 1));
  }
});
$('input#id_inputval-w1').change(function(){
  var value1=$(this).val();
  var value2=$('input#id_inputval-w2').val();
  if(parseInt(value1) < 50) {value1 = 50;}
  if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    $(this).val(value1);
  }
  $('#id_inputslider-w').slider('values', 0, value1);
});
$('input#id_inputval-w2').change(function(){
  var value1=$('input#id_inputval-w1').val();
  var value2=$(this).val();
  if (value2 > 250) {value2 = 250;}
  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    $(this).val(value2);
  }
  $('#id_inputslider-w').slider('values', 1, value2);
});

$('#id_inputslider-l').draggable();
$('#id_inputslider-w').draggable();

$('.popval-val').click(function() {
  var vall = $(this).data('vall');
  var valw = $(this).data('valw');
  $('#id_inputslider-l').slider('values', [vall, vall]);
  $('input#id_inputval-l1').val(vall);
  $('input#id_inputval-l2').val(vall);
  $('#id_inputslider-w').slider('values', [valw, valw]);
  $('input#id_inputval-w1').val(valw);
  $('input#id_inputval-w2').val(valw);
});



// product in productlist slider

$('.productlist__item-pics_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 0,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: false
});
$('.productlist__item').hover(function() {
  let itemId = '#' + $(this).attr("id");
  $(itemId+' .hoverbar1').hover(function () {
      $(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 0);
    }, function () {}
  );
  $(itemId+' .hoverbar2').hover(function () {
      $(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 1);
    }, function () {}
  );
  $(itemId+' .hoverbar3').hover(function () {
      $(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 2);
    }, function () {}
  );
  $(itemId+' .hoverbar4').hover(function () {
      $(itemId+' .productlist__item-pics_slide').slick('slickGoTo', 3);
    }, function () {}
  );
});



// FAQ accordion behavior

function behaviorFAQ() {
  if ($('.block-faq').hasClass('all--collapsed')) return;
  let def_width = $(document).width();
  if (def_width < 753) {
    $('.faq__item-a').collapse('hide');
    $('.faq__item-q').attr('data-bs-toggle', 'collapse');
  } else {
    $('.faq__item-a').collapse('show');
    $('.faq__item-q').removeAttr('data-bs-toggle');
  }

}
behaviorFAQ();
$(window).resize(function() {
  behaviorFAQ();
});



// slider productgallery

$('#id_productgallery-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#id_productgallery-nav',
  arrows: true,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 546,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '50px'
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px'
      }
    }
  ]
});
$('#id_productgallery-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '#id_productgallery-for',
  dots: false,
  arrows: false,
  centerMode: true,
  infinite: true,
  loop: true,
  focusOnSelect: true,
  centerPadding: '50px'
});


// product button click

$('.productcart__btns-bcompare, .productcart__btns-bfav').on('click', function () {
  $(this).toggleClass('active');
});



// select2

$('.select2type select').select2({
  width: 'resolve',
  dropdownCssClass: 'bigdrop'
});

$('.select2type.selector--nosearch select').select2({
  minimumResultsForSearch: -1
});


function iformat(color) {
  let originalOption = color.element;
  return $('<span><div class="product-color ' + $(originalOption).data('color') + '"></div>' + color.text + '</span>');
}

$('.select2type.selector--colorchoice select').select2({
  width: "100%",
  templateSelection: iformat,
  templateResult: iformat,
  allowHtml: true,
  minimumResultsForSearch: -1
});


// videosound off
$('.block-video video').prop('muted', true);

// run video on hover
function hoverVideo(e) {
  $('.video__i-play', this).css('opacity', '0');
  $('video', this).get(0).play();
  $('video', this).get(0).setAttribute('controls','controls');
}
function hideVideo(e) {
  $('.video__i-play', this).css('opacity', '0.5');
  $('video', this).get(0).pause();
  $('video', this).get(0).removeAttribute('controls','controls');
}
$('.block-video').hover(hoverVideo, hideVideo);
$('.block-video').on('touchstart', hoverVideo, function (e) {$('video', this).get(0).pause()});


// wtb filter button click

$('.wtbfilter__btns_b').on('click', function () {
  $(this).toggleClass('active');
});


// step choice click

$('.block-step').on('click', function () {
  $('.block-step').removeClass('check');
  $(this).toggleClass('check');
});
$('.block-step-one').on('click', function () {
  $('.block-step-one').removeClass('check');
  $(this).toggleClass('check');
});
$('.block-step-two').on('click', function () {
  $('.block-step-two').removeClass('check');
  $(this).toggleClass('check');
});


// configurator side choice

$('#dt0 .sidecheck__l').on('click', function () {
  $('#dt0 .side-l').show();
  $('#dt0 .side-r').hide();
});
$('#dt1 .sidecheck__l').on('click', function () {
  $('#dt1 .side-l').show();
  $('#dt1 .side-r').hide();
});
$('#dt1 .sidecheck__r').on('click', function () {
  $('#dt1 .side-l').hide();
  $('#dt1 .side-r').show();
});

$('#dt2 .sidecheck__l').on('click', function () {
  $('#dt2 .side-l').show();
  $('#dt2 .side-r').hide();
});
$('#dt2 .sidecheck__r').on('click', function () {
  $('#dt2 .side-l').hide();
  $('#dt2 .side-r').show();
});

$('#dt3 .sidecheck__l').on('click', function () {
  $('#dt3 .side-l').show();
  $('#dt3 .side-r').hide();
});
$('#dt3 .sidecheck__r').on('click', function () {
  $('#dt3 .side-l').hide();
  $('#dt3 .side-r').show();
});
$('#dt4 .sidecheck__r').on('click', function () {
  $('#dt4 .side-l').hide();
  $('#dt4 .side-r').show();
});




// configurator step 3 programming

$('#id_size-LCH').on('change', function () {
  const value = $(this).val();
  if (value == 0) {
    $('#id_size-LCH1').removeClass('active');
    $('#id_size-LCH2').removeClass('active');
  } else
  if (value == 1) {
    $('#id_size-LCH2').removeClass('active');
    $('#id_size-LCH1').addClass('active');
  } else
  if (value == 2) {
    $('#id_size-LCH1').removeClass('active');
    $('#id_size-LCH2').addClass('active');
  };
});
$('#id_size-LCK').on('change', function () {
  const value = $(this).val();
  if (value == 0) {
    $('#id_size-LCK1').removeClass('active');
    $('#id_size-LCK2').removeClass('active');
  } else
  if (value == 1) {
    $('#id_size-LCK2').removeClass('active');
    $('#id_size-LCK1').addClass('active');
  } else
  if (value == 2) {
    $('#id_size-LCK1').removeClass('active');
    $('#id_size-LCK2').addClass('active');
  };
});
$('#id_size-MCH').on('change', function () {
  const value = $(this).val();
  if (value == 0) {
    $('#id_size-MCH1').removeClass('active');
    $('#id_size-MCH2').removeClass('active');
  } else
  if (value == 1) {
    $('#id_size-MCH2').removeClass('active');
    $('#id_size-MCH1').addClass('active');
  } else
  if (value == 2) {
    $('#id_size-MCH1').removeClass('active');
    $('#id_size-MCH2').addClass('active');
  };
});
$('#id_size-MCK').on('change', function () {
  const value = $(this).val();
  if (value == 0) {
    $('#id_size-MCK1').removeClass('active');
    $('#id_size-MCK2').removeClass('active');
  } else
  if (value == 1) {
    $('#id_size-MCK2').removeClass('active');
    $('#id_size-MCK1').addClass('active');
  } else
  if (value == 2) {
    $('#id_size-MCK1').removeClass('active');
    $('#id_size-MCK2').addClass('active');
  };
});
$('#id_size-RCH').on('change', function () {
  const value = $(this).val();
  if (value == 0) {
    $('#id_size-RCH1').removeClass('active');
    $('#id_size-RCH2').removeClass('active');
  } else
  if (value == 1) {
    $('#id_size-RCH2').removeClass('active');
    $('#id_size-RCH1').addClass('active');
  } else
  if (value == 2) {
    $('#id_size-RCH1').removeClass('active');
    $('#id_size-RCH2').addClass('active');
  };
});
$('#id_size-RCK').on('change', function () {
  const value = $(this).val();
  if (value == 0) {
    $('#id_size-RCK1').removeClass('active');
    $('#id_size-RCK2').removeClass('active');
  } else
  if (value == 1) {
    $('#id_size-RCK2').removeClass('active');
    $('#id_size-RCK1').addClass('active');
  } else
  if (value == 2) {
    $('#id_size-RCK1').removeClass('active');
    $('#id_size-RCK2').addClass('active');
  };
});

// GuteClean and Ornament check
$('.item--gc').on('click', function () {
  $(this).toggleClass('check');
});
$('.item--orn').on('click', function () {
  $(this).toggleClass('check');
});


// slider portfolio

$('#id_portfolio').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px'
      }
    }
  ]
});




// flex gallery
$('.flex-images').flexImages({rowHeight: 450});


// slider dealerpic
$('#id_dealerpic-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#id_dealerpic-nav',
  arrows: true,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px'
      }
    }
  ]
});
$('#id_dealerpic-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '#id_dealerpic-for',
  dots: false,
  arrows: false,
  centerMode: true,
  infinite: true,
  loop: true,
  focusOnSelect: true,
  centerPadding: '50px'
});



// custom
$('#id_cu-glass_images').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  adaptiveHeight: true,
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '120px',
        speed: 100
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        autoplay: false,
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        speed: 100
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        speed: 100
      }
    }
  ]
});

$('#id_cu-profur_isp__images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  responsive: true
});

$('#id_cu-portfolio_images').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  autoplay: true,
  centerMode: true,
  centerPadding: '120px',
  variableWidth: true,
  adaptiveHeight: true,
  speed: 1000,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerPadding: '60px',
        speed: 100,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '60px',
        speed: 100,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});



//dropfilter
function checkButtonDisabled() {
  var allFirstOptionsSelected = true;
  $('#fm_dropfilter select').each(function(){
    if ($(this).val() !== $(this).find('option:first').val()) {
      allFirstOptionsSelected = false;
      return false;
    }
  });
  if (allFirstOptionsSelected) {
    $('#btn-dropfilter-reset').addClass('disabled');
  } else {
    $('#btn-dropfilter-reset').removeClass('disabled');
  }
}
$('#fm_dropfilter select').on('change', function(){
  checkButtonDisabled();
});
$('#btn-dropfilter-reset').click(function(){
  $('#fm_dropfilter select').each(function(){
    $(this).val($(this).find('option:first').val()).trigger('change.select2');
  });
  checkButtonDisabled();
});



// flex collage
function clflexImages() {
  $('.clflex-images').flexImages({
    rowHeight: 200,
    maxRows: 2
  });
  if ($(document).width() < 768) {
    $('.clflex-images').flexImages({
      rowHeight: 150,
      maxRows: 2
    });
  } else
  if ($(document).width() < 576) {
    $('.clflex-images').flexImages({
      rowHeight: 100,
      maxRows: 2
    });
  }
}
clflexImages();
$(window).resize(function() {
  clflexImages();
});



$('.wrongsetup-slider.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  responsive: true
});


});