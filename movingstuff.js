

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let scrollYOld = 0;
let scrollY = 0;
let down = false; // Track scrolling direction


// Refactored typewriterEffect function
function typewriterEffect(eventTarget, dataValue) {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    eventTarget.innerText = eventTarget.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return dataValue[index];
        }
      
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iteration >= dataValue.length) { 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}



// Initialize a variable to keep track of the current state
let toggle = false;

typewriterEffect(document.getElementById("fakepassword"), "MY WONDERLAND");

// Set up the interval to run every 3 seconds (3000 milliseconds)
setInterval(() => {
    if (toggle) {
      typewriterEffect(document.getElementById("fakepassword"), "MY WONDERLAND");
    } else {
      typewriterEffect(document.getElementById("fakepassword"), "XXXXXXXXXXXXX");
    }

    // Toggle the state for the next iteration
    toggle = !toggle;
}, 3000);


// Function to handle scroll events
function handleScroll() {
  scrollY = window.scrollY || window.pageYOffset;
  if(scrollYOld < 0 ){
    scrollYOld = 0;
  }

  /*
  // Check if scrolling down and past 200px
  if (scrollY < 500 && scrollY > scrollYOld && !down) {
    down = true;
    console.log("reveal");
    // Call typewriterEffect when "reveal" is printed
    typewriterEffect(document.getElementById("fakepassword"), "MY WONDERLAND");
  }
  // Check if scrolling up and within 200px
  else if (scrollY > 400 && scrollY < scrollYOld && down) {
    down = false;
    console.log("hide");
    typewriterEffect(document.getElementById("fakepassword"), "*************");

  }
  */
  const scaleFactor = 1 + (scrollY / 2000);
  const loginpage = document.getElementById('loginpage');


  if(scrollY < 3000){
    const computerBorder = document.getElementById('computerborder');
    
    computerBorder.style.transform = `scale(${scaleFactor})`;

    if(scrollY >1000){
      var mark = 1+(1000/2000);
      computerBorder.style.opacity = 1-((scaleFactor-mark)*1.5);
    }
    

  }
  
  if(scrollY < 800){
    

    loginpage.style.transform = `scale(${scaleFactor}) translateY(${scrollY*0.02}%)`;
  }

  const titlecard = document.getElementById('titlecard');
  if(scrollY > 400){
    titlecard.style.zIndex = "10";
    
  } else{
    titlecard.style.zIndex = "0";
  }


  scrollYOld = scrollY;
}

// Assign the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);



gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%', zIndex:'-3'})
gsap.set('.scrollDist', {width:'100%', height:'100%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)