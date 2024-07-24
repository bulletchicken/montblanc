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



// Function to handle scroll events
function handleScroll() {
  scrollY = window.scrollY || window.pageYOffset;
  if(scrollYOld < 0 ){
    scrollYOld = 0;
  }
  // Check if scrolling down and past 200px
  if (scrollY < 300 && scrollY > scrollYOld && !down) {
    down = true;
    console.log("reveal");
    // Call typewriterEffect when "reveal" is printed
    typewriterEffect(document.getElementById("fakepassword"), "my wonderland");
  }
  // Check if scrolling up and within 200px
  else if (scrollY > 300 && scrollY < scrollYOld && down) {
    down = false;
    console.log("hide");
    typewriterEffect(document.getElementById("fakepassword"), "*************");

  }

  if(scrollY < 1000){
    const computerBorder = document.getElementById('computerborder');
    const scaleFactor = 1 + (scrollY / 1000);
    computerBorder.style.transform = `scale(${scaleFactor})`;



    const loginpage = document.getElementById('loginpage');

    loginpage.style.transform = `scale(${scaleFactor})`;

    
    /*
    const baseWidth = 83; // base width in pixels
    const widthIncreaseFactor = 0.5; // width increase per pixel scrolled
    const newWidth = baseWidth + (scrollY * widthIncreaseFactor);
    loginpage.style.width = `${newWidth}%`
    */
  }


  scrollYOld = scrollY;
}

// Assign the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);
