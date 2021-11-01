// https://www.npmjs.com/package/react-responsive-carousel
import "./carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';
import Banner from './Banner';
import Header from './Header'
var ReactDOM = require('react-dom');

export class QuickTips extends Component {
    render() {
        return (
            <div>
                <Header
            appName="mood today"
            currentUser="owais" />
            <Banner></Banner>
            <Carousel showArrows={true}>
                <div>
                    <img src="./anxiety" />
                    <p className="legend">Feeling Anxious?</p>
                </div>
                <div>
                    <img src="./2.jpeg" />
                    <p className="legend">Low On Energy?</p>
                </div>
                <div>
                    <img src="./3.jpeg" />
                    <p className="legend">Having A Panic Attack?</p>
                </div>
                <div>
                    <img src="./4.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
            </div>
        );
    }}

  
export default (QuickTips);
