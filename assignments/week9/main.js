const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images =['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];
// const needs to be the name of the file that stores the pics

/* Declaring the alternative text for each image file */
const text = {
    'pic1.jpeg':'picnic at the farmer market',
    'pic2.jpeg':'Maggie on Farrand Feild with a cowboy hat',
    'pic3.jpeg':'light leak on a pic of Jan and Cece in the parking lot',
    'pic4.jpeg': 'Bella and Jan sitting on the trunk of Maggie\'s car in Eldora parking lot',
    'pic5.jpeg': 'parking lot circle before skiing'
}

/* Looping through images */
for (const pic of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${pic}`);
  // setAttribute(name,value)
  newImage.setAttribute('alt', text[pic]);
  thumbBar.appendChild(newImage);

  //add a click event listener to each thumbnail image
  newImage.addEventListener('click', bam => {
    displayedImage.src = bam.target.src;
    //find the value of the src attribute of the current image 
    //set the src attribute value of the displayed image to the src value passed in as a parameter 
    displayedImage.alt = bam.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });