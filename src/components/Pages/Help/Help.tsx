import * as React from 'react';
import CategoryTile from '../../buttons/category-tile/category-tile';
import HeroBanner from '../../hero-banner/hero-banner';
import InfoBanner from '../../info-banner/info-banner';

import heroBannerImage from '../../../assets/images/HelpHeroImage.jpeg';

import './Help.css';
import '../../styles/flexboxgrid.css';

export interface HelpProps {

    buttonLabel: string;
    ariaButtonLabel: string;
    openingTime: string;
    closingTime: string;
    openingDays: string;

    
}
 
const Help: React.FunctionComponent<HelpProps> = ({buttonLabel, ariaButtonLabel, openingDays, openingTime, closingTime}: HelpProps) => {
    return (
        <div className="main-column-container row col-xs-12 center-xs middle-xs padding-0">
            <section className="col-xs-10 row padding-0 center-xs start-md">

                <HeroBanner body="This is lorem ipsum text, which means absolutely nothing but looks good. The amount of times someone has pointed out a spelling mistake, only for it to be lorem impsum, is way too high." headline="This is the help headline that says something" imgAlt="Image showing BT's Portal with fibre optic cables coming out of it" imgSource={heroBannerImage} link="google.com"/>
                <div className="help-buttons-container row">
                    <CategoryTile text="Get Help" label="button to request help"/>
                    <CategoryTile text="Contact Us" label="click to contact us"/>
                    <CategoryTile text="Search our FAQ" label="look through our FAQs"/>
                    <CategoryTile text="Search our Forum" label="browse our forum for articles"/>
                </div>

            </section>

            <InfoBanner openingTime="9am" closingTime="5pm" openingDays="Mon-Fri incl. Bank Holidays"/>

        </div>
        
     );
}
 
export default Help;