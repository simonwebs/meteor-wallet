// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon,  MenuIcon, XIcon } from '@heroicons/react/outline';
import { GoSignIn } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (
      <Disclosure as="nav" className="w-full text-gray-700  h-16 fixed top-0 animated z-40 bg-slate-200 dark:bg-slate-800 shadow-sm" data-aos="fade-down">
        {({ open }) => (
          <>
            <div id='nav' className="max-w-7xl mx-auto px-4 z-10 :px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-gray-200 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-cyan-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="text-slate-800 dark:text-white block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="text-slate-800 dark:text-white block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="./img/simon.png"
                      alt="Logo" />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="./img/simon.png"
                      alt="Logo" />
                  </div>
                  <div className="hidden md:ml-8 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <div className="flex items-center">
                  <div id='nav' className="flex-shrink-0">
                    <a
                      href="/"
                      type="button"
                      className="bg-slate-200 text-md font-bold shadow-sm dark:bg-slate-800 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                 
                </div>
                    <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="bg-slate-200 text-md font-bold shadow-sm dark:bg-slate-800 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full">
                       Company
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/skills"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               Skills
                              </a>
                            )}
                          </Menu.Item>
                           <Menu.Item>
                            {({ active }) => (
                              <a
                                href="projects"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Projects
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="testimonials"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Testimonials
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/contact"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                            Contact
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a
                      href="/blog"
                      type="button"
                      className="bg-slate-200 text-md font-bold shadow-sm dark:bg-slate-800 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full"
                    >
                      <span>News</span>
                    </a>
                  </div>
                 
                </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleThemeSwitch}
                      className="bg-slate-600 text-md font-bold shadow-lg dark:bg-slate-800 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full"
                    >
                      {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                    </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a
                      href="signup"
                      type="button"
                      className="bg-slate-200 text-md font-bold shadow-lg dark:bg-slate-800 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full"
                    >
                      <GoSignIn className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      <span>Login</span>
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
         {/*  Mobile */}
          <Disclosure.Panel className="md:hidden bg-slate-100 dark:bg-slate-700">
          <div onClick={() => setNavbarOpen(!open)} className="pt-2 pb-3 space-y-1">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          
                  <div id='nav' className="flex-shrink-0">
                    <a
                      href="/"
                      type="button"
                      className="bg-slate-200 text-md font-bold shadow-sm dark:bg-slate-800 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                 <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="bg-slate-200 text-md font-bold shadow-sm dark:bg-slate-800 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full">
                       Company
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/skills"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               Skills
                              </a>
                            )}
                          </Menu.Item>
                           <Menu.Item>
                            {({ active }) => (
                              <a
                                href="projects"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Projects
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="testimonials"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Testimonials
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/contact"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                            Contact
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
            </div>
            <div>
            </div>
          </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  );
};