import React from 'react';
import {Link} from 'react-router-dom';
import { ReactNode } from 'react';
import BTLogo from '../../assets/bt-logo/bt-logo';
import NavigationLink from '../navigation-link/navigation-link';

import './header.css';
import '../styles/flexboxgrid.css';

interface IProps {
    children: ReactNode;
    displayText?: string;
    userName?: string;

}

const Header = ({userName}: IProps): JSX.Element => {

    return (

        <div className="bt-navbar-menu-container row col-xs-12 center-md">

            <header className="bt-navbar-top-menu bt-navbar-global row between-sm col-xs-12 col-md-10 middle-xs flex-start-xs padding-0">

                <div className="bt-navbar-top-menu bt-havbar-top-menu__left-menu row col-xs-12 col-md-4 middle-xs between-xs start-md padding-0">

                    <Link to="/" className="bt-link" aria-label="Click to go to BT's Homepage">
                        <BTLogo name="google.com" altName="Click to return to the BT homepage"/>
                    </Link>
                    
                    <Link className="bt-link hide-below-sm" to="/Shop">
                        <NavigationLink displayText="BT Shop" />
                    </Link>
                    
                    <Link className="bt-link bt-navbar__mobile-menu-link hide-sm" to="#">
                        <NavigationLink displayText="Menu" showChevron="show-chevron" />
                    </Link>
                    

                </div>

                <div className="bt-havbar-top-menu__right-menu row middle-xs">

                    <p><span className="bt-navbar-text hide-below-sm">Welcome back, {userName}</span></p>
                    <Link className="bt-link hide-below-sm" to="#">
                        <NavigationLink displayText="Log In" />
                    </Link>

                </div>



            </header>

        </div>

    )

}

export default Header;