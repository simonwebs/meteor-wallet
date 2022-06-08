/* eslint-disable no-unused-expressions */
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
// eslint-disable-next-line import/no-unresolved
import { Loading } from '../../components/Loading';
// eslint-disable-next-line import/no-unresolved
import { SelectContact } from '../../components/SelectContact';
// eslint-disable-next-line import/no-unresolved
import { Modal } from './Modal';
// eslint-disable-next-line import/no-unresolved
import { ContactsCollection } from '../../../api/collections/ContactsCollection';
import { WalletsCollection } from '../../../api/collections/WalletsCollection';
// eslint-disable-next-line import/no-unresolved

export const Wallet = () => {
  const isLoadingContacts = useSubscribe('allContacts');
  const isLoadingWallets = useSubscribe('wallets');
  const contacts = useFind(() =>
  ContactsCollection.find(
    { archived: { $ne: true } },
    { sort: { createdAt: -1 } }
  )
  );

  const [wallet] = useFind(() => WalletsCollection.find());
  const [open, setOpen] = React.useState(false);
  const [isTransferring, setIsTransferring] = React.useState(false);
  const [amount, setAmount] = React.useState('0');
  const [destinationWallet, setDestinationWallet] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState('');


 const addTransaction = () => {
   Meteor.call('transactions.insert', {
   isTransferring,
   destinationWalletId: destinationWallet?.walletId || '',
   amount: Number(amount),
   },
   (errorResponse) => {
    if (errorResponse) {
      if (errorResponse.error) {
        setErrorMessage(errorResponse.error);
      } else {
      errorResponse.details?.forEach((error) => {
        setErrorMessage(error.message);
      });
    }
    } else {
      setOpen(false);
      setDestinationWallet({});
      setAmount('0');
      setErrorMessage('');
    }
   }
   );
 };

 if (isLoadingContacts() || isLoadingWallets()) {
  return <Loading />;
}

return (

   <>
   <div className="bg-gray-700 flex mt-20 font-sans shadow-md my-10 rounded-md">
   <form className="flex-auto p-6">
     <div className="flex flex-wrap">
     <div className="w-full flex-none text-sm font-medium text-white">
     Main account
     </div>
     <div className="flex-auto text-sm font-medium text-white mt-2">
     Wallet ID:
     </div>
       <div className="text-lg font-bold text-white">
       {`${wallet.balance} ${wallet.currency}`}
       </div>
       <h1 className="w-full flex-none text-2xl font-semibold text-white mt-2">{wallet._id}</h1>
     </div>
     <div className="flex space-x-4 text-sm font-medium">
       <div className="flex-auto flex space-x-4 mt-4">
       <button
       type="button"
       className="h-10 px-6 font-semibold rounded-md bg-cyan-700/75 border text-white shadow-lg"
       onClick={() => {
         setIsTransferring(false);
         setOpen(true);
       }}
     >
       Add money
       </button>
         <button
         type="button"
         className="h-10 px-6 font-semibold rounded-md bg-cyan-700/75 border text-white shadow-lg"
         onClick={() => {
          setIsTransferring(true);
          setOpen(true);
        }}
       >
         Trasnfer money
         </button>
       </div>
     </div>
   </form>
   </div>

   <Modal
   open={open}
   setOpen={setOpen}
   title={
     isTransferring ? 'Transfare money to wallet' : 'Add money to your wallet'}
   body={
     <>
     {isTransferring && (
       <div className="mt-2">
         <SelectContact
         title="Destination contact"
          contacts={contacts}
         contact={destinationWallet}
          setContact={setDestinationWallet}

          />
       </div>
   )}

   <div className="mt-2">
   <label
   htmlFor="amount"
   className="block text-sm font-medium text-gray-700">
     Amount
   </label>
   <input
     type="number"
     id="amount"
     value={amount}
     min={0}
     onChange={(e) => setAmount(e.target.value)}
     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
     placeholder="00.00"
   />
   </div>
     </>
}
 footer={
   <button
   type="button"
   className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600"
   onClick={addTransaction}
 >
 {isTransferring ? 'Transfer' : 'Add'}
   </button>}
 errorMessage={errorMessage} />
   </>
);
};
