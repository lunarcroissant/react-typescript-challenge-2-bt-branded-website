import * as React from 'react';
import { Link } from 'react-router-dom'; 

import './primary-button.css';
import '../../styles/main.css';

export interface PrimaryButtonProps {

    buttonLabel: string;
    PageLink: string;
    
}
 
const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({buttonLabel, PageLink}: PrimaryButtonProps) => {
    return ( 

        <Link className="bt-link bt-primary-button" to={`${PageLink}`}>{buttonLabel}
        </Link>
        
     );
}
 
export default PrimaryButton;