import React from 'react';
import './memorial.css';
 

// Manually import each image
import img1 from './memorial/IMG_1615.JPG';
import img2 from './memorial/IMG_1619.JPG';
import img3 from './memorial/IMG_1652.JPG';
import img4 from './memorial/IMG_1664.JPG';
import img5 from './memorial/IMG_1672.JPG';
import img6 from './memorial/IMG_1682.JPG';
import img7 from './memorial/IMG_1703.JPG';
import img8 from './memorial/IMG_1711.JPG';
import img9 from './memorial/IMG_1731.JPG';
import img10 from './memorial/IMG_1759.JPG';
import img11 from './memorial/IMG_1765.JPG';
import img12 from './memorial/IMG_1800.JPG';

// Add the imported images to an array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
function Memorial() {
  return (
    <div className="memorial-container">
      <h1>Memorial Day Page</h1>
      <p>Welcome to the Memorial Day Page!</p>
      <p>Here you can find a collection of memorial images.</p>
      <p>Enjoy browsing!</p>
      <div className="memorial-grid">
        {images.map((image, index) => (
          <div key={index} className="memorial-item">
            <img src={image} alt={`memorial-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
console.log(images);
// This is a comment to test git
export default Memorial;