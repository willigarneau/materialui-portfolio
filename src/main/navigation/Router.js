import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfilePage from '../../profile/containers/ProfilePage.jsx';
import ContactUsPage from '../../contact/containers/ContactUsPage.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route component={() => <ProfilePage />} exact path="/" />
          <Route component={() => <ContactUsPage />} exact path="/contact" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

