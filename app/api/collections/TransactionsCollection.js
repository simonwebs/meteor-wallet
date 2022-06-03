import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import { WalletsCollection } from './WalletsCollection';

export const TRANSFER_TYPE = 'TRANSFER';
export const ADD_TYPE = 'ADD';


export const TransactionsCollection = new Mongo.Collection('transactions');

class TransactionsMongoCollection extends Mongo.Collection {
    insert(transactionDocument, callback) {
        if (transactionDocument.type === TRANSFER_TYPE) {
            // we could also check here if destination wallet exist
            const sourceWalletId = WalletsCollection.findOne(transactionDocument.sourceWalletId);
            if (!sourceWalletId) {
                throw new Meteor.Error('Source wallet not found.');
            }
            if (sourceWalletId.balance < transactionDocument.amount) {
                throw new Meteor.Error('Insufficient funds.');
            }
            WalletsCollection.update(transactionDocument.sourceWalletId, {
            $inc: { balance: -transactionDocument.amount },
            });
            WalletsCollection.update(transactionDocument.destinationWalletId, {
                $inc: { balance: transactionDocument.amount },
                });
        }
        // eslint-disable-next-line no-empty
        if (transactionDocument.type === ADD_TYPE) {
            const sourceWalletId = WalletsCollection.findOne(transactionDocument.sourceWalletId);
            if (!sourceWalletId) {
                throw new Meteor.Error('Source wallet not found.');
            }
            if (sourceWalletId.balance < transactionDocument.amount) {
                throw new Meteor.Error('Insufficient funds.');
            }
            WalletsCollection.update(transactionDocument.sourceWalletId, {
            $inc: { balance: -transactionDocument.amount },
            });
            WalletsCollection.update(transactionDocument.destinationWalletId, {
                $inc: { balance: transactionDocument.amount },
                });
        }
        return super.insert(transactionDocument, callback);
    }
}

const TransactionsSchema = new SimpleSchema({
    type: {
        type: String,
        allowedValues: [TRANSFER_TYPE, ADD_TYPE],
    },
    sourceWalletId: {
       type: String,
   },

    destinationWalletId: {
        type: String,
        optional: true,
   },
       amount: {
      type: Number,
   },
   createdAt: {
       type: Date,
   },
  });


  TransactionsCollection.attachSchema(TransactionsSchema);
