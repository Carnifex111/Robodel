import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OrderPage, TrackingPage, AllOrderPage } from '../../pages/index'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <OrderPage/>  
          </Route>
          <Route exact path="/tracking">
            <TrackingPage/>  
          </Route>
          <Route exact path="/orderPage">
            <AllOrderPage/>  
          </Route>
        </Switch>  
      </div>
    </Router>
  );
};

export default App;
