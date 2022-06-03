import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import '../app/api/ContactsCollection';
import '../app/api/transaction/TransactionsCollection';

import '../app/api/ContactsMethods';
import '../app/api/transaction/TransactionsMethods';


import '../app/api/wallet/WalletsPublications';
// eslint-disable-next-line import/no-unresolved
import '../app/api/ContactsPublication';
import { WalletsCollection } from '../app/api/wallet/WalletsCollection';

const walletSchema = new SimpleSchema({
  balance: Number,
  currency: String,
  createdAt: Date,
});

Meteor.startup(() => {
if (!WalletsCollection.find().count()) {
   WalletsCollection.insert({
     balance: 0,
     currency: 'GHC',
     createdAt: new Date(),
   });
}
});
