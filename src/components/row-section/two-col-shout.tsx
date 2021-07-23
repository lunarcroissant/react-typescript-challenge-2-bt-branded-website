import * as React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../buttons/PrimaryButton/primary-button';

import './two-col-shout.css';
import '../styles/main.css';
import '../styles/flexboxgrid.css';


interface IProps {
    headline?: string;
    body?: string;
    imgSource?: string;
    imgDescription?: string;
    layout?: string;
    link?: string;
    buttonCTA?: string;
}

const TwoColShout: React.FC<IProps> = ({headline, body, imgSource, imgDescription, layout, link, buttonCTA}) => {
    return (
        <div className={`two-col-shout ${layout}`}>

            <div className="container row col-sm-12 padding-vertical-20">

                <Link className="col-sm-6" to={link}>
                    <div className="two-col-shout__image-container">
                        <img src={imgSource} alt={imgDescription} />
                    </div>
                </Link>

                <div className="two-col-shout__text row col-sm-6 middle-xs">
                    <h2>
                        <b>{headline}</b>
                    </h2>
                    <p>
                        <b>
                            {body}
                        </b>
                    </p>
                    <div className="hide-below-sm">
                        <PrimaryButton buttonLabel={buttonCTA} PageLink={link} />
                    </div>
                   
                    
                </div>

            </div>

            <div className="two-col-shout__action-btn--mobile col-xs-12 center-xs padding-bottom-20"><PrimaryButton buttonLabel={buttonCTA} PageLink={link} /></div>

        </div>
    )
}

export default TwoColShout;