// @ts-nocheck
import React from 'react';
import { ContactForm } from './components/ContactForm.jsx';
import { ContactList } from './components/ContactList.jsx';
import { Header } from './components/Header.jsx';
import { Wallet } from './pages/wallet/Wallet.jsx';

export const App = () => (
  <div>
    <Header />
    <React.StrictMode>
    <div className="dark:bg-slate-800 bg-white ring-slate-900/5  dark:text-white">
      <Wallet />
       <ContactForm />
     <ContactList />
     </div>
    </React.StrictMode>
  </div>
);
