import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Example from './containers/example/Example';
import Paper from './containers/paper/Paper';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Example} />
    <Route exact path="/paper" component={Paper} />
  </Switch>
);

export default Routes;
