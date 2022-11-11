import React from 'react';

import { Routes as Switch, Route } from 'react-router-dom';

import { Container as EditContact } from './pages/EditContact';
import Home from './pages/Home';
import NewContact from './pages/NewContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Switch>
  );
}
