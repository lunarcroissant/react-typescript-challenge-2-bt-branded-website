import * as React from 'react';
import './primary-purchase-button.css';
import { Link } from 'react-router-dom';

export interface PrimaryPurchaseButtonProps {

    buttonCTA: string;
    PDPLink: string;
    
}
 
const PrimaryPurchaseButton: React.FunctionComponent<PrimaryPurchaseButtonProps> = ({buttonCTA, PDPLink}: PrimaryPurchaseButtonProps) => {
    return ( 
        
        <Link className="bt-primary-purchase-btn" to={`/${PDPLink}`}>
            <a className="bt-btn">{buttonCTA}</a>
        </Link>
     );
}
 
export default PrimaryPurchaseButton;
