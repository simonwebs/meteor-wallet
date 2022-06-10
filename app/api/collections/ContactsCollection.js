// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';

export const ContactsCollection = new Mongo.Collection('contacts');


const ContactsSchema = new SimpleSchema({
    name: {
      type: String,
      },
       email: {
        type: String,
      },
      imageUrl: {
          type: String,
      },
     walletId: {
       type: String,
   },
   createdAt: {
       type: Date,
   },
  });

ContactsCollection.attachSchema(ContactsSchema);
