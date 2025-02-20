import React from 'react';
import './flicks.css';


import img1 from './flicks/IMG_2380.JPG';
import img2 from './flicks/IMG_2407.JPG';
import img4 from './flicks/IMG_2403.JPG';
import img5 from './flicks/IMG_2429.JPG';
import img6 from './flicks/IMG_2436.JPG';
import img7 from './flicks/IMG_2484.JPG';
import img8 from './flicks/IMG_2538.JPG';
import img10 from './flicks/IMG_2386.JPG';
import img11 from './flicks/IMG_2415.JPG';
import img12 from './flicks/IMG_2436.JPG';
import img13 from './flicks/IMG_2521.JPG';
import img15 from './flicks/IMG_2535.JPG';
import img16 from './flicks/IMG_2538.JPG';
import img17 from './flicks/IMG_2559.JPG';
import img18 from './flicks/IMG_2447.JPG';
import img19 from './flicks/IMG_2501.JPG';
import img20 from './flicks/IMG_2513.JPG';

// Add the imported images to an array
const images = [img1, img2, img4, img5, img6, img7, img8, img10, img11, img12, img13, img15, img16, img17, img18, img19, img20];


function Flicks() {
  return (
    <div className="flicks-container">
      <h1>Halloween Page</h1>
      <p>Welcome to the Halloween Page!</p>
      <p>Here you can find a collection of flicks.</p>
      <p>Enjoy browsing!</p>
      <div className="flicks-grid">
        {images.map((image, index) => (
          <div key={index} className="flick-item">
            <img src={image} alt={`flick-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
console.log(images);
export default Flicks;