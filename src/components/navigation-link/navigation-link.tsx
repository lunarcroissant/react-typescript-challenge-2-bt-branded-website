import { Link } from 'react-router-dom';
import '../styles/flexboxgrid.css';

import './navigation-link.css';

interface IProps {
    displayText?: string;
    showChevron?: string;
    pageLink: string;
}

const NavigationLink = ({displayText, showChevron, pageLink}: IProps): JSX.Element => {
    return (
        
            
            <Link className="bt-navbar-global-nav-link middle-xs" to={pageLink}>
                <span className={`bt-navbar-global-nav-link-text middle-xs ${showChevron}`}>{displayText}</span>
            </Link>
        
    )
}

export default NavigationLink;