const leftSwitch = document.querySelector(".leftarrow");
const rightSwitch = document.querySelector(".rightarrow");
const img = document.querySelector(".hero__img");
const heroTxt = document.querySelector(".hero__txt");
const navLinks = document.querySelector(".nav__ul");
const heroSwitchMob = document.querySelector(".hero__switch__mob").children[0];
const navOpenMobBtn = document.querySelector(".menu");
const navOpenMob = document.querySelector(".nav__mob__open");
const userBtn = document.querySelector(".user");
const signupBtn = document.querySelector(".user__open__logOption").children[0]
  .children[1];
const signinBtn = document.querySelector(".user__open__logOption").children[0]
  .children[0];
const signInForm = document.querySelector(".user__open__sign");
const signupRecovery = document.querySelector(".user__open__recovery");





//departments

$(navLinks.children[0]).mouseover(function () {
  $(navLinks.children[0].children[1]).show(300);
});

$(navLinks.children[0].children[1]).mouseleave(function () {
  $(navLinks.children[0].children[1]).hide(300);
});

//shop

$(navLinks.children[2]).mouseover(function () {
  $(navLinks.children[2].children[1]).show(300);
});

$(navLinks.children[2].children[1]).mouseleave(function () {
  $(navLinks.children[2].children[1]).hide(300);
});

//account

$(navLinks.children[3]).mouseover(function () {
  $(navLinks.children[3].children[1]).show(300);
});

$(navLinks.children[3].children[1]).mouseleave(function () {
  $(navLinks.children[3].children[1]).hide(300);
});

//pages

$(navLinks.children[4]).mouseover(function () {
  $(navLinks.children[4].children[1]).show(300);
});

$(navLinks.children[4].children[1]).mouseleave(function () {
  $(navLinks.children[4].children[1]).hide(300);
});

//blog

$(navLinks.children[5]).mouseover(function () {
  $(navLinks.children[5].children[1]).show(300);
});

$(navLinks.children[5].children[1]).mouseleave(function () {
  $(navLinks.children[5].children[1]).hide(300);
});

//doc

$(navLinks.children[6]).mouseover(function () {
  $(navLinks.children[6].children[1]).show(300);
});

$(navLinks.children[6].children[1]).mouseleave(function () {
  $(navLinks.children[6].children[1]).hide(300);
});

//img switch array

const heroSwitchImg = [
  "/images/site_images/01--irxLil.jpg",
  "/images/site_images/02--yfgKTT.jpg",
  "/images/site_images/03--JfIc2n.jpg",
];

//color switch array

const heroSwitchColor = ["#3aafd2", "#f5b1b0", "#eba170"];

//txt change array

const heroSwitchFirstTxt = [
  "Has Just Arrived !",
  "Hurry up! Limited time offer.",
  "Complete your look with",
];

const heroSwitchSecondTxt = [
  "Huge Summer Collection",
  "Women Sportswear Sale",
  "New Men's Accessories",
];

const heroSwitchLastTxt = [
  "Swimwear, Tops, Shorts, Sunglasses & much more...",
  "Sneakers, Keds, Sweatshirts, Hoodies & much more...",
  "Hats & Caps, Sunglasses, Bags & much more...",
];

//header change num counter

let heroSwitchNum = 0;

//rightswitch changing code

$(rightSwitch).click(rightSwitchFunction);

function rightSwitchFunction() {
  heroSwitchNum++;
  if (heroSwitchNum > 2 || heroSwitchNum < 1) {
    heroSwitchNum = 0;
  }
  img.firstChild.src = heroSwitchImg[heroSwitchNum];
  heroTxt.style.backgroundColor = heroSwitchColor[heroSwitchNum];

  heroTxt.children[0].textContent = heroSwitchFirstTxt[heroSwitchNum];

  heroTxt.children[1].textContent = heroSwitchSecondTxt[heroSwitchNum];

  heroTxt.children[2].textContent = heroSwitchLastTxt[heroSwitchNum];
}

//leftswitch change code

$(leftSwitch).click(leftSwitchFunction);

function leftSwitchFunction() {
  heroSwitchNum--;
  if (heroSwitchNum < 0) {
    heroSwitchNum = 2;
  }
  img.firstChild.src = heroSwitchImg[heroSwitchNum];
  heroTxt.style.backgroundColor = heroSwitchColor[heroSwitchNum];

  heroTxt.children[0].textContent = heroSwitchFirstTxt[heroSwitchNum];

  heroTxt.children[1].textContent = heroSwitchSecondTxt[heroSwitchNum];

  heroTxt.children[2].textContent = heroSwitchLastTxt[heroSwitchNum];
}

//disable scroll bar

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}


//mob

//user mob open / close

$(".user__open").hide();

$(userBtn).click(function () {
  $(".user__open").fadeToggle(300);
});

$(".user__open i").click(function () {
  $(".user__open").fadeOut(300);
});

//nav mob open
$(navOpenMob).hide();

$(navOpenMobBtn).click(function () {
  $(navOpenMob).slideToggle(500);
});

//heroSwitchMOb
$(heroSwitchMob.children[0]).click(function () {
  img.firstChild.src = heroSwitchImg[0];

  heroTxt.style.backgroundColor = heroSwitchColor[0];

  heroTxt.children[0].textContent = heroSwitchFirstTxt[0];

  heroTxt.children[1].textContent = heroSwitchSecondTxt[0];

  heroTxt.children[2].textContent = heroSwitchLastTxt[0];

  heroSwitchMob.children[0].style.color = "#fe696a";
  heroSwitchMob.children[1].style.color = "#373f50";
  heroSwitchMob.children[2].style.color = "#373f50";
});

$(heroSwitchMob.children[1]).click(function () {
  img.firstChild.src = heroSwitchImg[1];

  heroTxt.style.backgroundColor = heroSwitchColor[1];

  heroTxt.children[0].textContent = heroSwitchFirstTxt[1];

  heroTxt.children[1].textContent = heroSwitchSecondTxt[1];

  heroTxt.children[2].textContent = heroSwitchLastTxt[1];

  heroSwitchMob.children[0].style.color = "#373f50";
  heroSwitchMob.children[1].style.color = "#fe696a";
  heroSwitchMob.children[2].style.color = "#373f50";
});

$(heroSwitchMob.children[2]).click(function () {
  img.firstChild.src = heroSwitchImg[2];

  heroTxt.style.backgroundColor = heroSwitchColor[2];

  heroTxt.children[0].textContent = heroSwitchFirstTxt[2];

  heroTxt.children[1].textContent = heroSwitchSecondTxt[2];

  heroTxt.children[2].textContent = heroSwitchLastTxt[2];

  heroSwitchMob.children[0].style.color = "#373f50";
  heroSwitchMob.children[1].style.color = "#373f50";
  heroSwitchMob.children[2].style.color = "#fe696a";
});

//sign in
$("#confirmPass , .confirmPass , #name , .name").hide();

$(signupBtn).click(function () {

//add input
$("#confirmPass , .confirmPass , #name , .name").show();
signupBtn.style.color = '#fe696a';
signinBtn.style.color = '#373f50';
$(signupRecovery).hide();
});

$(signinBtn).click(function () {

  //add input
  $("#confirmPass , .confirmPass , #name , .name").hide();
  signinBtn.style.color = '#fe696a';
  signupBtn.style.color = '#373f50';
  $(signupRecovery).show();
  });

//alert close

$('#alertExit').click(function(){
  $('.alert').hide();
});