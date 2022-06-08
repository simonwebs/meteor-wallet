import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Navbar } from './Navbar';


export const Header = () => (

<>
<div className="fixed w-full top-0 z-30 h-6 bg-sky-500">
<div className="w-fullflex items-center justify-end text-sm font-medium text-white">
Online banking coming soon!
</div>

<Navbar />
</div>
</>
  );
