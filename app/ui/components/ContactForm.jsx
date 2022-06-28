import React from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from './ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from './SuccessAlert';

export const ContactForm = () => {
  const [name, setName] = React.useState(''); // Formik
  const [email, setEmail] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [walletId, setWalletId] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

 const showError = ({ message }) => {
   setError(message);
   setTimeout(() => {
     setError('');
   }, 5000);
 };

 const showSuccess = ({ message }) => {
  setSuccess(message);
  setTimeout(() => {
    setSuccess('');
  }, 5000);
};


  const saveContact = () => {
    Meteor.call('contacts.insert', { name, email, imageUrl, walletId }, (errorResponse) => {
    if (errorResponse) {
      showError({ message: errorResponse.error });
    } else {
      setName('');
      setEmail('');
      setImageUrl('');
      setWalletId('');
      showSuccess({ message: 'Information saved' });
    }
    });
  };

  return (
    <>
    <section id="contact" className="pt-10 pb-36 px-8 bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mt-20" data-aos="fade-left">
    Contact Us
    </h2>

    <div className="relative py-4">

    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-100" data-aos="fade-up"/>
    </div>
    </div>
    </div>
    <div className="relative max-w-4xl mx-auto">

        <div className="relative z-20 bg-white dark:bg-slate-800 rounded p-8"></div>
    <form className="bg-gray-100 mt-6 shadow-lg rounded-md text-white">
     {error && <ErrorAlert message={error} />}
     {success && <SuccessAlert message={success} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        
         
          <input
            type="text"
            id="name"
            value={name}
             placeholder="Full Name"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
                       className="bg-white text-slate-700 dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"/>
      

          <input
            type="email"
            id="email"
            value={email}
             placeholder="Email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-slate-700 dark:bg-slate-800 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"/>
        

       
       
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
             placeholder="Image Url"
            autoComplete="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full border text-slate-700 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
      
      
       
        <input
          type="text"
          id="walletId"
          value={walletId}
           placeholder="WalletId ID:"
          onChange={(e) => setWalletId(e.target.value)}
          className="mt-1 block w-full border text-slate-700 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
    
    </div>
      <div className="px-2 py-3 text-right">
        <button
          type="button"
          onClick={saveContact}
          className="h-10 px-6 font-semibold rounded-md bg-cyan-700/75 border text-slate-100 shadow-lg"
        >
          Save Contact
        </button>
      </div>
    </form>
     
      </div>
    </section>
    </>
  );
};
