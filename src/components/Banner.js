import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner" style={{backgroundColor:"#4D6CB6"}}>
      <div className="container" style={{color:"white"}}>
        <h1 className="logo-font" style={{fontSize:50}}>
          psy pal
        </h1>
        <p>Your mental health companion</p>
      </div>
    </div>
  );
};

export default Banner;
