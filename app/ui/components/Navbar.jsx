import React from 'react';


export const Navbar = () => (
    <nav className="fixed w-full top-6 z-30 bg-slate-800 h-12 shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Swed Wallet</span>
              <img
                className="h-6 w-6"
                src="./log/Logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
