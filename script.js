// Banner image Slider logic


const hamIcon = document.getElementById("ham-icon");
const navMenusMobile = document.getElementById("nav-menus-mobile");

hamIcon.addEventListener("click", function(){
  navMenusMobile.style.transform = "translateX(0%)";
  navMenusMobile.style.transition = "all 0.5s ease";
})


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
      element.textContent = Math.floor(currentValue); // Update displayed number
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


window.addEventListener("scroll",function(){
  console.log(this.window.scrollY);

  if(this.window.scrollY >= 2476){
    animateNumber("stat1", 99, 2000);
    animateNumber("stat2", 30, 1000);
    animateNumber("stat3", 35, 1000);
    animateNumber("stat4", 3, 1000);
  }
})





