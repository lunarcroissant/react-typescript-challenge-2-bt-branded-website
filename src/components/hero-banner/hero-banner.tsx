import React, { Component } from 'react';
import './hero-banner.css';
import '../styles/flexboxgrid.css';


interface IProps {
    headline: string;
    body: string;
    imgSource?: string;
    imgAlt?: string;
    link?: string;
}

const HeroBanner = ({headline, body, imgSource, imgAlt, link}: IProps): JSX.Element => {
    return (

        <div className="hero-banner row col-xs-12 padding-0 middle-xs">
            <img className="hero-banner__image col-xs-12 col-md-6" src={`${imgSource}`} alt={imgAlt} />
            <div className="hero-banner__copy container col-xs-12 col-md-6 start-xs">  
                <h2>{headline}</h2>
                <p>{body}</p>
                {/* <div className="text-align-left">
                    <a href={link}>
                        <span className="btn rte primary-purchase btn-purple-text"></span>
                    </a>
                </div> */}
            </div>
        </div>

    )
}

export default HeroBanner;