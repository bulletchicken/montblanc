

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

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
let toggle = true;
const fakepassword = document.getElementById("fakepassword");

const toggleTypewriter = () => {
  if (toggle) {
    typewriterEffect(fakepassword, "WELCOME!");
  } else {
    typewriterEffect(fakepassword, "XXXXXXXX");
  }
  toggle = !toggle; // Toggle the state for the next iteration
};





//put my constants here
const computerBorder = document.getElementById('computerborder');
const backcloud = document.getElementById('backcloud');

const typing = document.getElementById('typing');

const prosthetic = document.getElementById('prosthetic');

const cardword2 = document.getElementById('cardword2');
const cardword3 = document.getElementById('cardword3');

const titlecard = document.getElementById('titlecard');


let intervalId = setInterval(toggleTypewriter, 2000);;


function handleScroll() {
  let scrollY = window.scrollY;

  const scaleFactor = 1 + (scrollY / 2000);
  const loginpage = document.getElementById('loginpage');

  if(scrollY==0){
    intervalId = setInterval(toggleTypewriter, 2000);
  }
  else {
    console.log("stop");
    clearInterval(intervalId);
    intervalId = null;
  }



  if(scrollY < 3000){

    

    computerBorder.style.transform = `scale(${scaleFactor})`;

    if(scrollY >1000){
      var mark = 1+(1000/2000);
      computerBorder.style.opacity = 1-((scaleFactor-mark)*1.5);
      
      backcloud.style.transform = `translateY(0)`;
      backcloud.style.transform = `translateX(0)`;
      backcloud.classList.remove('flying');


      
      typing.style.animation = `typing 2s steps(8), blink .5s step-end infinite alternate;`;
    } else{
      backcloud.style.transform = `translateY(0)`;
      backcloud.style.transform = `translateX(0)`;
    }

    if(scrollY < 200){
      backcloud.classList.add('flying');
    }

    

  }
  
  if (scrollY > 2420){
    
    prosthetic.style.opacity = `0`;
  } else {
    prosthetic.style.opacity = `100%`;
  }



  if (scrollY > 2500){
    
    cardword2.textContent=" ";
    cardword3.textContent=" ";
  } else {
    cardword2.textContent="into";
    cardword3.textContent="REALITY";
  }


  if (scrollY > 2900){
    const hawkeye = document.getElementById('hawkeye');
    hawkeye.style.opacity = `0`;
  } else {
    hawkeye.style.opacity = `100%`;
  }
  
  if(scrollY < 800){
    
    loginpage.style.transform = `scale(${scaleFactor}) translateY(${scrollY*0.02}%)`;
  }


  
  if(scrollY > 400){
    titlecard.style.zIndex = "10";
    
  } else{
    titlecard.style.zIndex = "0";
  }
  


  scrollYOld = scrollY;
}

// Assign the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);



gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'100%', height:'100%', top:0, left:'50%', x:'-50%', zIndex:'-3'})
gsap.set('.scrollDist', {width:'100%', height:'200%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)

