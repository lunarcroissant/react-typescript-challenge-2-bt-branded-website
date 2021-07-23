import * as React from 'react';
import ProductCard from '../../product-card/product-card';
import '../../styles/flexboxgrid.css';
import './shop.css';
import planData from '../../../API-Data/plans.json';
 
const Shop = (): JSX.Element => {
    const [allPlans, setAllPlans] = React.useState<any[] | null>(null);

    const baseUrl: string = "/images/";

    React.useEffect(() => {setAllPlans(planData)}, []);

    if(null) return <h2>Please be patient</h2>
    
    return ( 

        <main className="bt-shop-gallery col-xs-12 center-xs middle-xs">
            <div className="bt-shop-gallery-container col-xs-12 col-md-10 middle-xs padding-0">

                {allPlans && allPlans.length > 0 && allPlans.map(item => {
                    return <ProductCard planName={item.planName} data={item.data} name={item.name} minutes={item.minutes} texts={item.texts} price={item.price} productCTA={item.productCTA} frontImage={baseUrl + item.frontImage} rearImage={baseUrl + item.rearImage} rearImageAlt={item.rearImageAlt} frontImageAlt={item.frontImageAlt} />
                })}

            </div>
        </main>
     )
}
 
export default Shop;

