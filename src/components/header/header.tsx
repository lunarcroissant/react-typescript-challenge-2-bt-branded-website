import { ReactNode } from 'react';
import BTLogo from '../../assets/bt-logo/bt-logo';
import NavigationLink from '../navigation-link/navigation-link';

import './header.css';
import '../styles/flexboxgrid.css';
import '../navigation-link/navigation-link.css';

interface IProps {
    children: ReactNode;
    displayText?: string;
    userName?: string;
}

const Header = ({userName}: IProps): JSX.Element => {

    return (

        <nav className="bt-navbar-menu-container row col-xs-12 center-md">

            <header className="bt-navbar-top-menu bt-navbar-global row between-sm col-xs-12 col-md-10 middle-xs flex-start-xs padding-0">

                <ul className="bt-navbar-top-menu bt-havbar-top-menu__left-menu row col-xs-12 col-md-4 middle-xs between-xs start-md padding-0">

                    <li className="bt-navbar-screen-md-main bt-navbar-global-nav-link-item middle-xs bt-link" aria-label="Click to go to BT's Homepage">
                        <BTLogo pageLink="/" altName="Click to return to the BT homepage"/>
                    </li>
                    
                    <li className="bt-navbar-screen-md-main bt-navbar-global-nav-link-item middle-xs bt-link hide-below-sm">
                        <NavigationLink displayText="BT Shop" pageLink="/Shop"/>
                    </li>
                    
                    <li className="bt-link bt-navbar__mobile-menu-link hide-sm">
                        <NavigationLink displayText="Menu" showChevron="show-chevron" pageLink="#" />
                    </li>
                    

                </ul>

                <ul className="bt-havbar-top-menu__right-menu row middle-xs">

                    <li className="bt-link"><p><span className="bt-navbar-text hide-below-sm">Welcome back, {userName}</span></p></li>
                    <li className="bt-navbar-screen-md-main bt-navbar-global-nav-link-item middle-xs bt-link hide-below-sm">
                        <NavigationLink displayText="Log In" pageLink="#" />
                    </li>

                </ul>



            </header>

        </nav>

    )

}

export default Header;