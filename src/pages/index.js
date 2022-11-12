import './index.css';
/* timer */
const tekuscheyeVremya = new Date();
document.querySelector(".product__date").innerHTML = tekuscheyeVremya.getDate() + "." + tekuscheyeVremya.getMonth() + "." + tekuscheyeVremya.getFullYear();

const numberOfMinutes = 10;
const deadlineTime = new Date( new Date().getTime() + (numberOfMinutes * 60 * 1000) );
const timer = setInterval(function() {
  const time = new Date().getTime();
  const restOfTime = deadlineTime - time;
  let minutes = Math.floor( (restOfTime % (1000 * 60 * 60)) / (1000 * 60) );
  let second = Math.floor( (restOfTime % (1000 * 60)) / 1000 );
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;
  document.querySelector(".product__timer").innerHTML = minutes + ":" + second;
  if (restOfTime < 0) {
    clearInterval(timer);
    document.querySelector(".product__timer").innerHTML = "00" + ":" + "00";
  }
}, 1000);

/* burger */

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".header__burger-menu");
const burgerClose = document.querySelector(".burger__close");

burgerMenu.addEventListener("mousedown", () => {
  burger.classList.add('burger_opened');
})

burgerClose.addEventListener("mousedown", () => {
  burger.classList.remove('burger_opened');
})

burger.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains('burger') || e.target.classList.contains('burger__close')) {
    burger.classList.remove('burger_opened')
  }
})

/* comeBacker */

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
let stb_exitintent = false;

popupClose.addEventListener("mousedown", () => {
  popup.classList.remove('popup_opened');
})

popup.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close')) {
    popup.classList.remove('popup_opened')
  }
})

document.addEventListener("mousemove", (e) => {
const scroll = window.pageYOffset || document.documentElement.scrollTop;
if((e.pageY - scroll) < 10 && stb_exitintent == false) {
  popup.classList.add('popup_opened');
	stb_exitintent = true;
}
});
