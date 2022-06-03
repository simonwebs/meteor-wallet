import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import { App } from '/app/ui/App';
import '../app/api/methods/ContactsMethods';
import '../app/api/methods/TransactionsMethods';


Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
