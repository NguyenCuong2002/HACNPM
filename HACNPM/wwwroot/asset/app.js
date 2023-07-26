$(document).ready(function () {
  $(".img-slider").slick(
    {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      centerPadding:'100px',
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows : false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  }
  );
});


$(document).ready(function () {
  $(".suggest-image").slick(
    {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows : false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  }
  );
});


$(document).ready(function () {
  $(".info-slider").slick(
    {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            arrows : false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  }
  );
});


const user = document.querySelector('.user') 
const booking = document.querySelector('.booking')
user.onclick = () => {
  booking.classList.toggle('active')
}
const minus = document.querySelector('.minus')
const add = document.querySelector('.add')
var inputBooking = document.querySelector('.input-booking').value;
function getInputValue() {
  inputBooking = parseInt(inputBooking);
  console.log(inputBooking)
  return inputBooking;
}

minus.onclick = (callback) => {
 
    inputBooking -= 2;
    callback(getInputValue);

}

add.onclick = () => {
  inputBooking += 2;
  console.log(inputBooking)
}
