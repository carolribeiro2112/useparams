import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ListProducts from '../pages/ListProducts';
import Products from '../pages/Products';


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ListProducts}/>
      <Route path="/produto/:id" exact component={Products}/>
    </Switch>
  )
}

export default Routes;