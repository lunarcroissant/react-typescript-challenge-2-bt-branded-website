import './App.css';
import * as React from 'react';
import Header from './components/header/header';
import BTLogo from './assets/bt-logo/bt-logo';
import TwoColShout from './components/row-section/two-col-shout';
import Footer from './components/footer/footer';
import Shop from './components/Pages/Shop/Shop';
import Help from './components/Pages/Help/Help';
import Home from './components/Pages/Homepage/Home';

// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import './components/styles/main.css'




function App() {

  // state = {};

  //   fetchProductData = () => {
  //       fetch('/products.json')
  //       .then(rsp => rsp.json())
  //       .then(productInfo => {
  //           this.productInfo = productInfo;
  //       })
  //   }

  //   var numberOfProducts: number = 5;

    // Array.apply(null, { length: number: 10 }).map((e, i) => (

    // ));


  return (

    <Router>

      <div className="App">
            <Header children={BTLogo} displayText="BT Shop" userName="Joe"/>

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/help" component={Help} />
                <Route path="/shop" component={Shop} />
              </Switch>

            <Footer />

          </div>


    </Router>

  );
}

export default App;
