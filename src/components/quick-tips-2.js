// https://www.npmjs.com/package/react-responsive-carousel
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import reactImage1 from './anxiety.jpeg';
import reactImage2 from './image_quick_tips.jpeg';
import reactImage3 from './image_appointment.jpeg';
import Banner from './Banner';
import Header from './Header';

function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const divStyle = {
        color: 'blue',
        width: '700px',
        height: "42px",
        align: "center",
        marginLeft: "360px"
        
    };

    const hstyle = {
      color: "white",
      backgroundColor: "#4D6CB6",
      marginTop: "20px"
    };
  
    return (
        <div style={{height:"50px"}}>
                <Header
            appName="mood today"
            currentUser="owais" />

            <Banner></Banner>
    
    <div style={divStyle}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{backgroundColor:"blue"}}>
          <div class={divStyle}>
          <img
            className="d-block w-30"
            src={reactImage1}
            alt="First slide"
          />
          </div>
          <Carousel.Caption>
            <p style={hstyle}>Feeling Anxious?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={reactImage1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <p style={hstyle}>Feeling Anxious?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={reactImage1}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <p style={hstyle}>Feeling Anxious?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    );
  }
  
  export default (ControlledCarousel);