const leftSwitch = document.querySelector('.leftarrow');
const rightSwitch = document.querySelector('.rightarrow');
const img = document.querySelector('.hero__img');
const heroTxt = document.querySelector('.hero__txt');
const navLinks = document.querySelector('.nav__ul');
const heroSwitchMob = document.querySelector('.hero__switch__mob').children[0];

//nav hover

//departments
navLinks.children[0].addEventListener('mouseover' , function(){
    navLinks.children[0].children[1].style.display = 'unset';
});
navLinks.children[0].children[1].addEventListener('mouseout' , function(){
    navLinks.children[0].children[1].style.display = 'none';
});

//shop
navLinks.children[2].addEventListener('mouseover' , function(){
    navLinks.children[2].children[1].style.display = 'unset';
});
navLinks.children[2].children[1].addEventListener('mouseout' , function(){
    navLinks.children[2].children[1].style.display = 'none';
});

//account
navLinks.children[3].addEventListener('mouseover' , function(){
    navLinks.children[3].children[1].style.display = 'unset';
});
navLinks.children[3].children[1].addEventListener('mouseout' , function(){
    navLinks.children[3].children[1].style.display = 'none';
});

//pages
navLinks.children[4].addEventListener('mouseover' , function(){
    navLinks.children[4].children[1].style.display = 'unset';
});
navLinks.children[4].children[1].addEventListener('mouseout' , function(){
    navLinks.children[4].children[1].style.display = 'none';
});

//blog
navLinks.children[5].addEventListener('mouseover' , function(){
    navLinks.children[5].children[1].style.display = 'unset';
});
navLinks.children[5].children[1].addEventListener('mouseout' , function(){
    navLinks.children[5].children[1].style.display = 'none';
});
//doc
navLinks.children[6].addEventListener('mouseover' , function(){
    navLinks.children[6].children[1].style.display = 'unset';

});
navLinks.children[6].children[1].addEventListener('mouseout' , function(){
    navLinks.children[6].children[1].style.display = 'none';
});







//img switch array

const heroSwitchImg = ['/images/site_images/01--irxLil.jpg' , '/images/site_images/02--yfgKTT.jpg' , '/images/site_images/03--JfIc2n.jpg'];

//color switch array

const heroSwitchColor = ['#3aafd2' , '#f5b1b0' , '#eba170'];

//txt xhange array

const heroSwitchFirstTxt = ['Has Just Arrived !' , 'Hurry up! Limited time offer.' , 'Complete your look with'];

const heroSwitchSecondTxt = ['Huge Summer Collection' , 'Women Sportswear Sale' , "New Men's Accessories"];

const heroSwitchLastTxt = ['Swimwear, Tops, Shorts, Sunglasses & much more...' , 'Sneakers, Keds, Sweatshirts, Hoodies & much more...' , 'Hats & Caps, Sunglasses, Bags & much more...'];

let heroSwitchNum = 0;

//heroSwitchMOb
heroSwitchMob.children[0].addEventListener('touchstart' , function(){
    img.firstChild.src = heroSwitchImg[0];

    heroTxt.style.backgroundColor = heroSwitchColor[0];

    heroTxt.children[0].textContent = heroSwitchFirstTxt[0];

    heroTxt.children[1].textContent = heroSwitchSecondTxt[0];

    heroTxt.children[2].textContent = heroSwitchLastTxt[0];

    heroSwitchMob.children[0].style.color = '#fe696a';
    heroSwitchMob.children[1].style.color = '#373f50';
    heroSwitchMob.children[2].style.color = '#373f50';
});

heroSwitchMob.children[1].addEventListener('touchstart' , function(){
    img.firstChild.src = heroSwitchImg[1];

    heroTxt.style.backgroundColor = heroSwitchColor[1];

 heroTxt.children[0].textContent = heroSwitchFirstTxt[1];

 heroTxt.children[1].textContent = heroSwitchSecondTxt[1];

 heroTxt.children[2].textContent = heroSwitchLastTxt[1];

    heroSwitchMob.children[0].style.color = '#373f50';
    heroSwitchMob.children[1].style.color = '#fe696a';
    heroSwitchMob.children[2].style.color = '#373f50';
});

heroSwitchMob.children[2].addEventListener('touchstart' , function(){
    img.firstChild.src = heroSwitchImg[2];

    heroTxt.style.backgroundColor = heroSwitchColor[2];

 heroTxt.children[0].textContent = heroSwitchFirstTxt[2];

 heroTxt.children[1].textContent = heroSwitchSecondTxt[2];

 heroTxt.children[2].textContent = heroSwitchLastTxt[2];

    heroSwitchMob.children[0].style.color = '#373f50';
    heroSwitchMob.children[1].style.color = '#373f50';
    heroSwitchMob.children[2].style.color = '#fe696a';
});

//rightswitch changing code

rightSwitch.addEventListener('click' , rightSwitchFunction);

function rightSwitchFunction(){
    heroSwitchNum++;
    if(heroSwitchNum>2  || heroSwitchNum<1){
        heroSwitchNum = 0;
    }
 img.firstChild.src = heroSwitchImg[heroSwitchNum];
 heroTxt.style.backgroundColor = heroSwitchColor[heroSwitchNum];

 heroTxt.children[0].textContent = heroSwitchFirstTxt[heroSwitchNum];

 heroTxt.children[1].textContent = heroSwitchSecondTxt[heroSwitchNum];

 heroTxt.children[2].textContent = heroSwitchLastTxt[heroSwitchNum];
}

//leftswitch change code

leftSwitch.addEventListener('click' , leftSwitchFunction);

function leftSwitchFunction(){
    heroSwitchNum--;
    if(heroSwitchNum<0){
        heroSwitchNum = 2;
    }
 img.firstChild.src = heroSwitchImg[heroSwitchNum];
 heroTxt.style.backgroundColor = heroSwitchColor[heroSwitchNum];

 heroTxt.children[0].textContent = heroSwitchFirstTxt[heroSwitchNum];

 heroTxt.children[1].textContent = heroSwitchSecondTxt[heroSwitchNum];

 heroTxt.children[2].textContent = heroSwitchLastTxt[heroSwitchNum];
}
