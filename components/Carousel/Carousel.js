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
        imgBanner = document.createElement('img'),
        rightBtn = document.createElement('div');


  const imgArr = [ '../assets/carousel/mountains.jpeg' , '../assets/carousel/computer.jpeg', '../assets/carousel/trees.jpeg' , '../assets/carousel/turntable.jpeg']
  let i = 3;

  imgBanner.src = imgArr[i];
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';

  newCarousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

 
  leftBtn.addEventListener('click',() => {
  i--
  // console.log(i)
  return i
  });
  rightBtn.addEventListener('click',() => {
   i++
  // console.log(i)
  return i
  });
  
  
  newCarousel.appendChild(leftBtn);
  newCarousel.appendChild(imgBanner);
  newCarousel.appendChild(rightBtn);

  return newCarousel
}



const caroCont = document.querySelector('.carousel-container');

caroCont.append(caroCreate());


