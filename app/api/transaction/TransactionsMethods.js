import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { TransactionsCollection } from './TransactionsCollection';


Meteor.methods({
    'transactions.insert'({ isTransferring, sourceWalletId, destinationWalletId, amount }) {
            check(isTransferring, Boolean);
            check(sourceWalletId, String);
            check(destinationWalletId, String);
            check(amount, Number);
        if (!sourceWalletId) {
            throw new Meteor.Error('SourceWalletId is required.');
        }
        if (isTransferring) {
          throw new Meteor.Error('Source Wallet is required.');
        }
        if (isTransferring && !destinationWalletId) {
          throw new Meteor.Error('Destination Wallet is required.');
        }
        if (!amount || amount <= 0) {
          throw new Meteor.Error('Amount is required.');
        }
        // insert a new data in transaction collection & check if the authorization
        return TransactionsCollection.insert({
        type: isTransferring ? 'TRANSFER' : 'ADD',
         sourceWalletId,
         destinationWalletId: isTransferring ? destinationWalletId : null,
          amount,
          createdAt: new Date(),
        });
      },
  });
