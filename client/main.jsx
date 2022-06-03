import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import { App } from '/app/ui/App';
import '../app/api/ContactsMethods';
import '../app/api/transaction/TransactionsMethods';


Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
