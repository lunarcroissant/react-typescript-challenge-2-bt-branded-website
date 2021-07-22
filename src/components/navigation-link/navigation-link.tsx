import React from 'react';
import '../styles/flexboxgrid.css';
// import '../styles/main.css';
import './navigation-link.css';

interface IProps {
    displayText?: string;
    showChevron?: string;
}

const NavigationLink = ({displayText, showChevron}: IProps): JSX.Element => {
    return (
        <li className="bt-navbar-screen-md-main bt-navbar-global-nav-link-item middle-xs">
            
            <a className="bt-navbar-global-nav-link middle-xs">
                <span className={`bt-navbar-global-nav-link-text middle-xs ${showChevron}`}>{displayText}</span>
            </a>
        
        </li>
    )
}

export default NavigationLink;