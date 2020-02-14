/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function caroCreate(){
  const newCarousel = document.createElement('div'),
        leftBtn = document.createElement('div'),
        imgOne = document.createElement('img'),
        imgTwo = document.createElement('img'),
        imgThree = document.createElement('img'),
        imgFour = document.createElement('img'),
        rightBtn = document.createElement('div');
  
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';
  imgOne.src = './assets/carousel/mountains.jpeg';
  imgTwo.src = './assets/carousel/computer.jpeg';
  imgThree.src = './assets/carousel/trees.jpeg';
  imgFour.src = './assets/carousel/turntable.jpeg';

  newCarousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  newCarousel.appendChild(leftBtn);
  newCarousel.appendChild(imgOne);
  newCarousel.appendChild(imgTwo);
  newCarousel.appendChild(imgThree);
  newCarousel.appendChild(imgFour);
  newCarousel.appendChild(rightBtn);

  return newCarousel
}


const caroCont = document.querySelector('.carousel-container');

caroCont.append(caroCreate());

