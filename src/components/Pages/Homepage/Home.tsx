import * as React from 'react';

import HorizontalDivider1 from '../../horizontal-divider-1/horizontal-divider-1';
import TwoColShout from '../../row-section/two-col-shout';

import dealsImage from '../../../assets/images/MobilePlansPromoPoster.jpeg';
import helpImage from '../../../assets/images/HelpArticleImage.jpeg';

import '../../styles/flexboxgrid.css';

export interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div className="main-column-container row col-xs-12 center-xs padding-0">
            <section className="col-xs-10 start-xs padding-0">

                <TwoColShout link="/Shop" headline="A very important thing" body="BT Broadband customers get 2OGB for only £10 on a 24-month contract. That’s twice as much data compared to the £10 12-month plan. Plus with SIM Only you can increase or decrease your data each month. Offer ends 22 July." imgSource={dealsImage} imgDescription="One of the latest devices stood next to a BT SIM card" buttonCTA="See all personalised Deals"/>
                <HorizontalDivider1 />
                <TwoColShout link="/Help" headline="We’re working to bring you greener broadband" body="11,400 tonnes of CO2 saved We refurbished over 400,000 bits of tech in 2020 and recycled over half a million more. That’s saved the same amount of CO2 as 6,000 flights from London to Tokyo. Source: The Carbon Trust" imgSource={helpImage} imgDescription="A woman sitting by the window, looking at her phone" buttonCTA="Get in Touch"/>

            </section>
        </div>
     );
}
 
export default Home;