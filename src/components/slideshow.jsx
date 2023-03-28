import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import ad_1 from '../images/ad_1.jpeg';
import 'react-slideshow-image/dist/styles.css';


const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  width: '40rem',
  height: '40rem',
  display: 'flex',
  flex:1,
  justifContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  objectFit: 'contain',
  position: 'relative',
  marginLeft: '16rem',
  objectPosition: '80% 100%'
}

// const image = {
//   maxWidth: '100%',
//   maxHeight: '100%',
//   objectFit: 'contain',
//   //objectPosition: '100% 100%',
//   margin: 'auto',
//   display: 'block',
//   backgroundSize: 'cover'
// }

const slideImages = [
  {
    url: `${ad_1}`,
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

function Slideshow() {
  return (
    <div className="slide-container">
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