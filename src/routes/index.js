import React from "react";
import { Route, Switch } from "react-router-dom";
//
import Error404 from "../stateless/Error404"
import Main from '../statefull/Main';
import Product from '../statefull/Product';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/produto/:productId" component={Product} />
      <Route component={Error404}/>
    </Switch>
  );
}

export default Routes;