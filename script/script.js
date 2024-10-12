$(document).ready(function(){
    $('.promotion-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        prevArrow: "<button class='slick-prev carousel-control-prev' aria-label='Previous' type='button'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='visually-hidden'>Previous</span></button>",
        nextArrow: "<button class='slick-next carousel-control-next' aria-label='Next' type='button'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='visually-hidden'>Next</span></button>",
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        }]
    });
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    $('.newproduct-carousel').slick({
        variableWidth:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite:false,
        autoplay: false,
        arrows: true,
        prevArrow: "<button class='slick-prev carousel-control-prev' aria-label='Previous' type='button'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='visually-hidden'>Previous</span></button>",
        nextArrow: "<button class='slick-next carousel-control-next' aria-label='Next' type='button'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='visually-hidden'>Next</span></button>",
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
    $('.category-carousel').slick({
        // variableWidth:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:false,
        autoplay: false,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.nav-slick').slick({
        // variableWidth:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite:false,
        autoplay: false,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
            }
        }]
    });
});

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', 'rgb(251,171,171)', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', 'rgb(251,171,171)', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', 'rgb(251,171,171)', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', 'rgb(251,171,171)', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', 'rgb(251,171,171)', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

$('input[type=range]#fromSlider').on('change', function() {
    $('input[type=range]#fromSliderModal').val($(this).val())
    $('input[type=number]#fromInputModal').val($(this).val())
    controlFromSliderModal(fromSliderModal, toSliderModal, fromInputModal);
  });

$('input[type=range]#toSlider').on('change', function() {
    $('input[type=range]#toSliderModal').val($(this).val())
    $('input[type=range]#toInputModal').val($(this).val())
    controlToSliderModal(fromSliderModal, toSliderModal, toInputModal);
  });
// Modal range slider
function controlFromInputModal(fromSliderModal, fromInputModal, toInputModal, controlSlider) {
    const [from, to] = getParsed(fromInputModal, toInputModal);
    fillSliderModal(fromInputModal, toInputModal, '#C6C6C6', 'rgb(251,171,171)', controlSlider);
    if (from > to) {
        fromSliderModal.value = to;
        fromInputModal.value = to;
    } else {
        fromSliderModal.value = from;
    }
}
    
function controlToInputModal(toSliderModal, fromInputModal, toInputModal, controlSlider) {
    const [from, to] = getParsed(fromInputModal, toInputModal);
    fillSliderModal(fromInputModal, toInputModal, '#C6C6C6', 'rgb(251,171,171)', controlSlider);
    setToggleAccessibleModal(toInputModal);
    if (from <= to) {
        toSliderModal.value = to;
        toInputModal.value = to;
    } else {
        toInputModal.value = from;
    }
}

function controlFromSliderModal(fromSliderModal, toSliderModal, fromInputModal) {
  const [from, to] = getParsed(fromSliderModal, toSliderModal);
  fillSliderModal(fromSliderModal, toSliderModal, '#C6C6C6', 'rgb(251,171,171)', toSliderModal);
  if (from > to) {
    fromSliderModal.value = to;
    fromInputModal.value = to;
  } else {
    fromInputModal.value = from;
  }
}

function controlToSliderModal(fromSliderModal, toSliderModal, toInputModal) {
  const [from, to] = getParsed(fromSliderModal, toSliderModal);
  fillSliderModal(fromSliderModal, toSliderModal, '#C6C6C6', 'rgb(251,171,171)', toSliderModal);
  setToggleAccessibleModal(toSliderModal);
  if (from <= to) {
    toSliderModal.value = to;
    toInputModal.value = to;
  } else {
    toInputModal.value = from;
    toSliderModal.value = from;
  }
}

function fillSliderModal(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessibleModal(currentTarget) {
  const toSliderModal = document.querySelector('#toSliderModal');
  if (Number(currentTarget.value) <= 0 ) {
    toSliderModal.style.zIndex = 2;
  } else {
    toSliderModal.style.zIndex = 0;
  }
}

const fromSliderModal = document.querySelector('#fromSliderModal');
const toSliderModal = document.querySelector('#toSliderModal');
const fromInputModal = document.querySelector('#fromInputModal');
const toInputModal = document.querySelector('#toInputModal');
fillSliderModal(fromSliderModal, toSliderModal, '#C6C6C6', 'rgb(251,171,171)', toSliderModal);
setToggleAccessibleModal(toSliderModal);

fromSliderModal.oninput = () => controlFromSliderModal(fromSliderModal, toSliderModal, fromInputModal);
toSliderModal.oninput = () => controlToSliderModal(fromSliderModal, toSliderModal, toInputModal);
fromInputModal.oninput = () => controlFromInputModal(fromSliderModal, fromInputModal, toInputModal, toSliderModal);
toInputModal.oninput = () => controlToInputModal(toSliderModal, fromInputModal, toInputModal, toSliderModal);

$('input[type=range]#fromSliderModal').on('change', function() {
    $('input[type=range]#fromSlider').val($(this).val())
    $('input[type=number]#fromInput').val($(this).val())
    controlFromSlider(fromSlider, toSlider, fromInput);
  });

$('input[type=range]#toSliderModal').on('change', function() {
    $('input[type=range]#toSlider').val($(this).val())
    $('input[type=range]#toInput').val($(this).val())
    controlToSlider(fromSlider, toSlider, toInput);
  });