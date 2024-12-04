// Select all elements with the "box" class
const boxes = document.querySelectorAll(".box");

// Create a new Intersection Observer
const options = {
  root: null, // use the viewport as the root
  threshold: 0, // 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;

      let valueDisplays = document.querySelectorAll(".num");
      let interval = 4000;

      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
    } else {
      entry.target.style.opacity = 0;
    }
  });
}, options);

const particlesContainer = document.querySelector('.particles');
const numParticles = 50; // Adjust number of hydrogen atoms

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Random position
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  
  // Random size
  const size = Math.random() * 6 + 4; // Between 4px and 10px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Append to container
  particlesContainer.appendChild(particle);
}

// Start observing each target element
boxes.forEach((box) => observer.observe(box));
