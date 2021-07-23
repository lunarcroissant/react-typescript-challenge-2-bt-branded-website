import './App.css';
import Header from './components/header/header';
import BTLogo from './assets/bt-logo/bt-logo';
import Footer from './components/footer/footer';
import Shop from './components/Pages/Shop/Shop';
import Help from './components/Pages/Help/Help';
import Home from './components/Pages/Homepage/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import './components/styles/main.css'




function App() {


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
