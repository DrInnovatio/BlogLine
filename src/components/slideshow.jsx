import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import pic_1 from '../images/001.jpg'
import pic_2 from '../images/002.jpg'
import pic_3 from '../images/003.jpg'
import pic_4 from '../images/004.jpg'
import pic_5 from '../images/005.jpg'
import pic_6 from '../images/006.jpg'
import pic_7 from '../images/007.jpg'
import pic_8 from '../images/008.jpg'
import pic_9 from '../images/009.jpg'
import pic_10 from '../images/010.jpg'
import 'react-slideshow-image/dist/styles.css';


const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  width: '35rem',
  height: '35rem',
  display: 'flex',
  flex:1,
  justifContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  objectFit: 'contain',
  position: 'relative',
  
}


const slideImages = [
  {
    url: `${pic_1}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_2}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_3}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_4}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_5}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_6}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_7}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_8}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_9}`,
    caption: 'Slide 1'
  },
  {
    url: `${pic_10}`,
    caption: 'Slide 1'
  },
  

  
];

function Slideshow() {
  return (
    <div className="slide-container" style={{width: '50rem'}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
             <div style={ {...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  );
};

export default Slideshow;