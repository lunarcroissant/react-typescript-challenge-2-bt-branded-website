import React from 'react';
import PrimaryButton from '../buttons/PrimaryPurchaseButton/primary-purchase-button';
import { Link } from 'react-router-dom';
import './product-card.css';
import '../styles/flexboxgrid.css';
import '../styles/main.css';
import PrimaryPurchaseButton from '../buttons/PrimaryPurchaseButton/primary-purchase-button';
// import PhoneFront from '../../assets/images/Oppo-A53-black-sm-front.png';
// import phoneFront2 from '/assets/images/Oppo-A53-black-sm-front.png';
// import phoneFront2 from '../../assets/images/Oppo-A53-black-sm-front.png';
// import phoneBack2 from '../../assets/images/Oppo-A53-black-sm-back.png';
// import test from '../../../assets/images/device-5-back.png';
// import test2 from '../../assets'

interface PlanCardProps {
    planName: string;
    name: string;
    data: number;
    texts: number;
    minutes: number;
    price: number;
    productCTA: string;
    rearImage: string;
    frontImage: string;
    rearImageAlt: string;
    frontImageAlt: string;
}
const PlanCard: React.FunctionComponent<PlanCardProps> = ({planName, name, data, texts, minutes, price, productCTA, rearImage, frontImage, rearImageAlt, frontImageAlt}: PlanCardProps) => {

    console.log(frontImage);
    
    return (
        <div className="bt-product-card">
    <div className="device-card__device-info">
        <div className="device-card__device-name">
            {name}
        </div>
        <div className="device-card__visualiser">
            <div className="device-card__visualiser-wrap col center-xs middle-xs">
                <div className="device-card__visualiser-images">
                    <div className="device-card__visualiser-back-view">
                        <img src={rearImage} alt={rearImageAlt} />
                    </div>
                    <div className="device-card__visualiser-front-view">
                        <img src={frontImage} alt={frontImageAlt} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="device-card__price col-xs-12 center-xs">
        <ul className="device-card__plan-details">
            <li className="device-card__monthly-cost">Starting at <span className="device-card__hero-price">£{price}</span> a month.</li>
            <li className="device-card__monthly-details">{data}GB data</li>
            <li className="device-card__monthly-details">{texts} texts</li>
            <li className="device-card__monthly-details">{minutes} minutes</li>
        </ul>
        
        <div className="device-card__cta-actions row col-xs-12 middle-xs center-xs between-xs padding-0">
            <Link className="col-xs-12 row middle-xs center-xs col-md-6 col-lg-12 padding-0 bt-link" to={`/shop/${name}`}>
                <PrimaryPurchaseButton buttonCTA={productCTA} PDPLink={planName} />
            </Link>
            <div className="device-card__compare-field whitespace-no-wrap row font-bold col-xs-12 col-md-5 col-lg-12 center-xs padding-0">
                <label className="device-card__compare-field-label"><input type="checkbox"  /> Compare</label>
            </div>
        </div>
    </div>
    </div>
     );
}
export default PlanCard;