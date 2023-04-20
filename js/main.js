// const animationImages = document.querySelectorAll('.animation');

// animationImages.forEach(img => {
//   img.addEventListener('mouseover', () => {
//     img.style.animationPlayState = 'paused';
//   });
//   img.addEventListener('mouseout', () => {
//     img.style.animationPlayState = 'pause';
//   });
// });



// const animationImage = document.querySelector('.animation');

// function animateIn() {
//   animationImage.classList.add('animate-in');
// }

// window.addEventListener('scroll', animateIn);



// const animationImages = document.querySelectorAll('.animation');

// function checkScroll() {
//   animationImages.forEach(image => {
//     const elementTop = image.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (elementTop < windowHeight) {
//       image.classList.add('animate-in');
//     }
//   });
// }

// window.addEventListener('scroll', checkScroll);
// window.addEventListener('load', checkScroll);

// const animationImage = document.querySelector('.animation');

// function animateIn() {
//   const elementTop = animationImage.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   if (elementTop < windowHeight) {
//     animationImage.classList.add('animate-in');
//   }
// }

// window.addEventListener('scroll', animateIn);
// window.addEventListener('load', animateIn);


const animationImages = document.querySelectorAll('.gatoSubiendo');

function animateIn() {
  animationImages.forEach(image => {
    const elementTop = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      image.classList.add('animate-in');
    }
  });
}

window.addEventListener('scroll', animateIn);
window.addEventListener('load', animateIn);