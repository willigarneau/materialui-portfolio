import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../../profile/containers/Welcome';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route component={() => <Welcome />} exact path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

