let scrollY = 0;

function update() {
    // Update elements based on scroll position
    const computerBorder = document.getElementById('computerborder');
    const scaleFactor = 1 + (scrollY / 1000);
    computerBorder.style.transform = `scale(${scaleFactor})`;
    console.log("hit")
    // Request the next animation frame
    requestAnimationFrame(update);
}

window.addEventListener('scroll', () => {
    scrollY = window.scrollY || window.pageYOffset;
});

// Start the animation frame loop
requestAnimationFrame(update);
