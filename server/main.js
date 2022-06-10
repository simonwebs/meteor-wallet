// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import '../app/api/collections/TransactionsCollection';
import '../app/api/methods/ContactsMethods';
import '../app/api/methods/TransactionsMethods';
import '../app/api/publications/WalletsPublications';
import '../app/api/publications/ContactsPublication';
import { ContactsCollection } from '../app/api/collections/ContactsCollection';
import { WalletsCollection } from '../app/api/collections/WalletsCollection';
import '../infra/CustomError';

Meteor.startup(() => {
    if (!ContactsCollection.find().count()) {
    ContactsCollection.insert({
  name: 'Simon Agbey',
  email: 's.agbey@yahoo.com',
  imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
  walletId: '123123',
   createdAt: new Date(),
  });
}
  if (!WalletsCollection.find().count()) {
    WalletsCollection.insert({
      balance: 50,
      currency: 'GHS',
   createdAt: new Date(),
  });
}
});
