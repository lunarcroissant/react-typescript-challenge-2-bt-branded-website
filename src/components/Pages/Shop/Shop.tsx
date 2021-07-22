import * as React from 'react';
import ProductCardTest from '../../product-card/prodCard';
import '../../styles/flexboxgrid.css';
import './shop.css';
import planData from '../../../API-Data/plans.json';
import PlanCardInterface from '../../product-card/plans-interface';

import test from '../../../assets/images/device-1-back.png';

// interface ShopProps {
//     planInformation: PlanCardInterface[],
// }

// const data = [
//     {
//         "planName": "Spocksung S2 10GB",
//         "name": "Spocksung S2",
//         "data": 10,
//         "texts": 100,
//         "minutes": 50,
//         "price": 150.00,
//         "rearImage": "hello",
//         "frontImage": "hebyello"
//     },
//     {
//         "planName": "Spocksung S5 10GB",
//         "name": "Spocksung S2",
//         "data": 10,
//         "texts": 100,
//         "minutes": 50,
//         "price": 500.00
//     },
//     {
//         "planName": "Sapple 43+ 30GB",
//         "name": "Sapple 43+",
//         "data": 30,
//         "texts": 100,
//         "minutes": 50,
//         "price": 300.00
//     },
//     {
//         "planName": "MinusOne 40GB",
//         "name": "MinusOne",
//         "data": 40,
//         "texts": 100,
//         "minutes": 50,
//         "price": 400.00
//     },
//     {
//         "planName": "Sapple 43 Spenny 10GB",
//         "name": "MinusOne",
//         "data": 100,
//         "texts": "Unlimited",
//         "minutes": "Unlimited",
//         "price": 600.00
//     }
// ]
 
const Shop = (): JSX.Element => {
    const [allPlans, setAllPlans] = React.useState<any[] | null>(null);

    const baseUrl: string = "/images/";

    React.useEffect(() => {setAllPlans(planData)}, []);

    if(null) return <h2>Please be patient</h2>
    
    return ( 

        <main className="bt-shop-gallery col-xs-12 center-xs middle-xs">
            <div className="bt-shop-gallery-container col-xs-12 col-md-10 middle-xs padding-0">

                {allPlans && allPlans.length > 0 && allPlans.map(item => {
                    return <ProductCardTest planName={item.planName} data={item.data} name={item.name} minutes={item.minutes} texts={item.texts} price={item.price} productCTA={item.productCTA} frontImage={baseUrl + item.frontImage} rearImage={baseUrl + item.rearImage} rearImageAlt={item.rearImageAlt} frontImageAlt={item.frontImageAlt} />
                })}

            </div>
        </main>
     )
}
 
export default Shop;

