// Banner image Slider logic

const hamIcon = document.getElementById("ham-icon");
const navMenusMobile = document.getElementById("nav-menus-mobile");

hamIcon.addEventListener("click", function () {
  navMenusMobile.style.transform = "translateX(0%)";
  navMenusMobile.style.transition = "all 0.5s ease";
});

// map logic here

// var map = L.map('map').setView([53.2734, -7.77832031], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var marker = L.marker([53.2734, -7.77832031]).addTo(map);

// inventory stats logic here

// Function to animate number increment
function animateNumber(elementId, targetValue, duration) {
  let element = document.getElementById(elementId);
  let currentValue = 0;
  const increment = targetValue / (duration / 50); // Increment per step

  let interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(interval); // Stop when we reach the target value
    }
    element.textContent = Math.floor(currentValue); //Update displayed number
  }, 50);
}

// Example: animate numbers for stats
//

// function runOnScroll(){
//   const target = document.getElementById("stats-in-view");
//       const targetPosition = target.getBoundingClientRect();

//       // Check if the target element is in view (partially or fully)
//       if (targetPosition.top <= window.innerHeight) {
//         // Call the function you want to run
//         animateNumber("stat1", 99, 2000);
// animateNumber("stat2", 30, 1000);
// animateNumber("stat3", 35, 1000);
// animateNumber("stat4", 3, 1000);

//       }

// }

window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);

  if (this.window.scrollY >= 2476) {
    animateNumber("stat1", 99, 2000);
    animateNumber("stat2", 30, 1000);
    animateNumber("stat3", 35, 1000);
    animateNumber("stat4", 3, 1000);
  }
});

// Video cards sliding logic here......
const video1 = document.getElementById("video-1");
const jumpBtn = document.querySelector(".jump-btn");

// const videoArr = ["video-1","video-2","video-3","video-4","video-5","video-6"];

const videoCard1Wrap = document.querySelectorAll(".video-card-1-wrap");
const videoSlider = document.querySelector(".videos-slider");




// video play and pause logic
videoCard1Wrap.forEach((child) => {
  
  let isPlaying = false;

  const currVideo = child.querySelector(".curr-video");
  const playBtn = child.querySelector(".play-button-wrapper");

  playBtn.addEventListener("click", function () {
    isPlaying = true;

    if (isPlaying) {
      currVideo.play();
      playBtn.style.display = "none";
    }

    currVideo.addEventListener("click", function () {
      if (isPlaying == true) {
        playBtn.style.display = "flex";
        currVideo.stop();
        
        isPlaying = false;
      }
    });
  });

   
});


// for sliding the cards
let clickCount = 0;

// getting the right arrow
const rightArrow = document.getElementById("slide-right-arrow");

// getting the left arrow
const leftArrow = document.getElementById("slide-left-arrow");


let video_1 = document.getElementById("video-card-1");
let video2 = document.getElementById("video-card-2");
let video3 = document.getElementById("video-card-3");
let video4 = document.getElementById("video-card-4");
let video5 = document.getElementById("video-card-5");
let video6 = document.getElementById("video-card-6");

// right arrow functionality
rightArrow.addEventListener("click", function(){
  if(clickCount >= 0 && clickCount < 4){
     clickCount += 1;

    //  let slideVal1 = "0px";
    //  let slideVal2 = "-360px";
    //  let slideVal3 = "-720px";
    //  let slideVal4 = "-1080px";

     if(clickCount == 1){
      videoSlider.style.transform = "translateX(-375px)";
     videoSlider.style.transition = "all 0.5s ease";
     video2.classList.remove("mid-video");
     video3.classList.add("mid-video");
     jumpBtn.style.transform = "translateX(15px)";

     }else if(clickCount == 2){
      videoSlider.style.transform = "translateX(-735px)";
     videoSlider.style.transition = "all 0.5s ease";
     video3.classList.remove("mid-video");
     video4.classList.add("mid-video");
     jumpBtn.style.transform = "translateX(30px)";

     }else if(clickCount == 3){
      videoSlider.style.transform = "translateX(-1095px)";
     videoSlider.style.transition = "all 0.5s ease";
     video4.classList.remove("mid-video");
     video5.classList.add("mid-video");
     jumpBtn.style.transform = "translateX(45px)";
     }else{
     videoSlider.style.transform = "translateX(0px)";
     videoSlider.style.transition = "all 0.5s ease";
     clickCount = 0;
     video5.classList.remove("mid-video");
     video2.classList.add("mid-video");
     jumpBtn.style.transform = "translateX(0px)";
     }
  }
})


// left arrow functionality
leftArrow.addEventListener("click", function(){
  


  if(clickCount >= 0 && clickCount < 4){
    clickCount += 1;
    //  clickCount -= 1;

    //  let slideVal1 = "0px";
    //  let slideVal2 = "-360px";
    //  let slideVal3 = "-720px";
    //  let slideVal4 = "-1080px";

    if(clickCount == 1){
      videoSlider.style.transform = "translateX(-360px)";
     videoSlider.style.transition = "all 0.5s ease";
     video2.classList.remove("mid-video");
     video3.classList.add("mid-video");

     }else if(clickCount == 2){
      videoSlider.style.transform = "translateX(-720px)";
     videoSlider.style.transition = "all 0.5s ease";
     video3.classList.remove("mid-video");
     video4.classList.add("mid-video");

     }else if(clickCount == 3){
      videoSlider.style.transform = "translateX(-1080px)";
     videoSlider.style.transition = "all 0.5s ease";
     video4.classList.remove("mid-video");
     video5.classList.add("mid-video");

     }else{
     videoSlider.style.transform = "translateX(0px)";
     videoSlider.style.transition = "all 0.5s ease";
     clickCount = 0;
     video5.classList.remove("mid-video");
     video2.classList.add("mid-video");
     }
  }
})


// our clients section sliding logic...

let rightArrowClient = document.querySelector(".right-wala");
let ourClientSlider = document.querySelector(".our-clients-slider");

let leftArrowClient = document.querySelector(".left-arrow-client");



// ourClientSlider.style.transform = "translateX(-890px)"
let clickCounter = 0;


// right arrow logic
rightArrowClient.addEventListener("click", function(){
  clickCounter++;

  if(clickCounter > 2){
    clickCounter = 0;
  }

  if(clickCounter == 1){
ourClientSlider.style.transform  = "translateX(-10px)";
  }
  else if(clickCounter == 2){
   ourClientSlider.style.transform = "translateX(-855px)"
  }else{
    ourClientSlider.style.transform = "translateX(855px)"
  }

  

  

  
  
})


// left arrow logic
leftArrowClient.addEventListener("click", function(){
  clickCounter++;

  if(clickCounter == 1){
ourClientSlider.style.transform  = "translateX(-10px)";
ourClientSlider.style.transition = "all 0.5s ease";
  }
  else if(clickCounter == 2){
   ourClientSlider.style.transform = "translateX(-855px)";
   ourClientSlider.style.transition = "all 0.5s ease";
  }else{
    ourClientSlider.style.transform = "translateX(855px)";
    ourClientSlider.style.transition = "all 0.5s ease";
  }
  
})


let clickValue = 0;

function handleAutoSlide(){
  clickValue++;
  
  if(clickValue == 1){
    ourClientSlider.style.transform  = "translateX(-10px)";
    ourClientSlider.style.transition = "all 0.5s ease";
      }
      else if(clickValue == 2){
       ourClientSlider.style.transform = "translateX(-855px)";
       ourClientSlider.style.transition = "all 0.5s ease";
      }else{
        ourClientSlider.style.transform = "translateX(855px)";
        ourClientSlider.style.transition = "all 0.5s ease";
      }
  
}

setInterval(handleAutoSlide, 3500);

