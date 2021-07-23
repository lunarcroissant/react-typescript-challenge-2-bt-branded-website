import './footer.css';

import '../styles/flexboxgrid.css';

const Footer = (): JSX.Element => {
    return (
        <footer className="bt-footer row col-xs-12 center-xs start-md">
            <p className="row .col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-5 padding-0">Created by Edward Tierney, all BT assets used with written permission and not for profit</p>
        </footer>
    )
}

export default Footer;