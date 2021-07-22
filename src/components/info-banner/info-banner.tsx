import * as React from 'react';

import './info-banner.css';
import '../styles/flexboxgrid.css';

export interface InfoAreaProps {
    openingTime: string;
    closingTime: string;
    openingDays: string;
}
 
const InfoArea: React.FunctionComponent<InfoAreaProps> = ({openingTime, closingTime, openingDays}: InfoAreaProps) => {
    return ( 
        <div className="bt-info-banner row col-xs-12 middle-xs center-xs">
            <p className="col-offset-xs-1 col-xs-10 start-xs">Operating hours: {openingTime} - {closingTime} {openingDays}</p>
        </div>
     );
}
 
export default InfoArea;