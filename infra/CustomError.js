// @ts-nocheck
/* eslint-disable no-undef */
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';

SimpleSchema.defineValidationErrorTransform((error) => {
    const ddpError = new Meteor.Error(error.massage);
    ddpError.error = validation - error;
    ddpError.details = error.details;
    return ddpError;
});
