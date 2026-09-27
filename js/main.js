/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu')
, navToggle = document.getElementById('nav-toggle')
,navClose = document.getElementById('nav-close');
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
// Hide menu
if(navClose){   
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== HOME SWIPER ===============*/
const swiperHome = new Swiper('.home-swiper', {

  loop: true, 
//   المستخدم يمكنه التمرير يميناً/يساراً إلى ما لا نهاية
  grabCursor:true,
//   غير شكل مؤشر الماوس إلى يد
  speed:800,
  effect:'creative',
  creativeEffect:{
    prev:{
        translate:['-120%',0,-500],
        rotate:[0,0,-45],
        opacity:0,
    },
    next:{
        translate:['120%',0,-500],
        rotate:[0,0,45],
        opacity:0,
    }
  },
  autoplay:{
    //   يتحكم في التشغيل التلقائي  للشرائح.

    delay:3000,
    // تحدد المدة الزمنية 
    disableOnInteraction:false 
    // لا تعطل التشغيل التلقائي false  بعد تفاعل المستخدم، يستمر التشغيل التلقائي كما كان.
    //بعد تفاعل المستخدم، يتوقف التشغيل التلقائي نهائياً true عطل التشغيل التلقائي
  } 



});

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = ()=>{
    const header =document.getElementById('header')
    this.scrollY>=50? header.classList.add('scroll-header'):header.classList.remove("scroll-header")
}
window.addEventListener('scroll',scrollHeader)



/*=============== PRODUCTS SWIPER ===============*/
const swiperTabs = new Swiper('.product-tabs',{
    slidesPerView :'auto', 
})
const swiperProducts =new Swiper('.product-content',{
    loop:true,
    spaceBetween:400,
    thumbs:{
        swiper:swiperTabs,
    }
});

/*=============== NEW SWIPER ===============*/
const swiperNew = new Swiper('.new-swiper', {
  loop: true,
  grabCursor:true,
  centeredSlides:'auto',
  slidesPerView:'auto',
  speed:600,
  effect:'creative',
  creativeEffect:{
    limitProgress:2,
    prev:{
        translate:['-32%',0,0],
        scale:.58,
    },
    next:{
        
        translate:['32%',0,0],
        scale:.58,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.new .swiper-button-next',
    prevEl: '.new .swiper-button-prev',
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },


});

/*=============== SHOW SCROLL UP ===============*/ 
const scroolup = () =>{
    const scrollup = document.getElementById('scroll-up')
    //add the .scroll-header class if the bottom scroll of the viewport is greater then 350
    this.scrollY >=350 ? scrollup.classList.add('show-scroll'):scrollup.classList.remove('show-scroll')

}
window.addEventListener('scroll',scroolup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
//link the ID of each section (section id="home")to each link (a harf="#home")
//and activate the link with the class .active-link
const scrollActive = ()=>{
    //We get the position by scrolling down 
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id,// id of each section 
            top = section.offsetTop - 50,
            height = section.offsetHeight,//Element height
            link = document.querySelector('.nav__menu a[href*='+id+']')

            if(!link)return
            link.classList.toggle('active-link,scrollY > top && scrollY <= top + height')

    })
    window.addEventListener('scroll',scrollActive)
}
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'bottom',
    distance:'60px',
    duration:1500,
    delay:300,
   easing:'cubic-bezier(0.34,1.56,0.64,1)',
    reset:true,//Animations repeat
})
sr.reveal(`.home-title`,{arigin:'top'})
sr.reveal(`.home-desc`,{delay :600 ,origin:'top'})
sr.reveal(`.home-data .button`,{delay :900 ,distance:0,scale:0, origin:'top'})
sr.reveal(`.home-base`,{delay:900})
sr.reveal(`.home-swiper`,{delay:1200 ,origin:'top'})
sr.reveal(`.home-swiper`,{delay:1500 ,scale:0})
sr.reveal(`.home-data img`,{delay :2100 ,distance:0,interval:0, scale:0})
sr.reveal(`.home-leaf-1,.home_leaf-2,.home__sticker-3,.home__sticker-4`,{delay :2400 ,distance:0,interval:200, scale:0})

sr.reveal(`.about-cupcake-1,.about__cupcake-2`,{rotate:{x:0,y:0,z:120}})
sr.reveal(`.about-data .section__title`,{delay:900})
sr.reveal(`.about-desc`,{delay:1200})
sr.reveal(`.about-data .button`,{delay:1500,distance:0,scale:0})
sr.reveal(`.about-blob`,{delay:1800,origin:'right'})
sr.reveal(`.about-img`,{delay:1800,origin:'left'})
sr.reveal(`.about-leaf,.about__cupcake-3`,{delay:2700,distance:0,interval:200, scale:0})
sr.reveal(`.about-data img`,{delay:3000 ,distance:0,interval:200,scale:0})

sr.reveal(`.product .section__title`,{})
sr.reveal(`.product-button`,{delay:600,interval:100})
sr.reveal(`.product-content`,{delay:900})


sr.reveal(`.new-data .section__title`,{})
sr.reveal(`.new-desc`,{delay:600,interval:100})
sr.reveal(`.new-data .button`,{delay:900})
sr.reveal(`.new-swiper`,{delay:1200})
sr.reveal(`.new-leaf-1, .new__leaf-2,.new__leaf-3`,{delay:1500,distance:0,interval:200,scale:0})
sr.reveal(`.new-titles`,{delay:1800,scale:0})


sr.reveal(`.contact-contact .section__title`,{})
sr.reveal(`.contact-info`,{delay:600,interval:100})
sr.reveal(`.contact-map`,{delay:900,origin:'top'})
sr.reveal(`.contact-data img`,{delay:1500,distance:0,interval:200,scale:0})

sr.reveal(`.footer-container`,{})
sr.reveal(`.footer-leaf-1,footer-leaf-2`,{delay:600,interval:200})
sr.reveal(`.footer-blob`,{delay:600})