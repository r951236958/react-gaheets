import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import menulinks from '../menulinks'

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      <div className="bg-blueGray-900">
        <nav className="bg-darkBlue-900">
          <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed. */}
                  {/*
                    Heroicon name: menu
        
                    Menu open: "hidden", Menu closed: "block"
                */}
                  <svg
                    width="27"
                    height="27"
                    className={(!menuOpen ? 'block' : 'hidden') + ' h-6 w-6'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/*
                  Heroicon name: x
    
                  Menu open: "block", Menu closed: "hidden"
                */}
                  <svg
                    width="27"
                    height="27"
                    className={(menuOpen ? 'block' : 'hidden') + ' h-6 w-6'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link component={RouterLink} color="inherit" to="/">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 600 476.6"
                      width="25"
                      height="25"
                    >
                      <path
                        d="m0 259.8v-259.8l225 129.9v86.6l-150-86.6v173.2z"
                        fill="#00b0ff"
                      />
                      <path
                        d="m225 129.9 225-129.9v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                        fill="#0081cb"
                      />
                      <path
                        d="m225 303.1v86.6l150 86.6v-86.6z"
                        fill="#00b0ff"
                      />
                      <path
                        d="m375 476.3 225-129.9v-173.2l-75 43.3v86.6l-150 86.6zm150-346.4v-86.6l75-43.3v86.6z"
                        fill="#0081cb"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    {menulinks.map((items, i) => (
                      <Link
                        component={RouterLink}
                        key={i}
                        activeclassname="active"
                        color="inherit"
                        to={items.link}
                      >
                        {items.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <div className="mx-3 relative">
                  {/* Profile dropdown */}
                  <button
                    className="p-1 rounded-full text-gray-300 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="sr-only">View notifications</span>
                    {/* Heroicon name: bell */}
                    <svg
                      width="27"
                      height="27"
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  {/*
                    Profile dropdown panel, show/hide based on dropdown state.
        
                    For animated transitions, import { Transition } from '@headlessui/react' and wrap the next tag in this component:
                    */}
                  <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <Link
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Home
                      </Link>
                      <Link component={RouterLink} color="inherit" to="/about">
                        About
                      </Link>
                      <Link component={RouterLink} color="inherit" to="/form">
                        Form
                      </Link>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
          <div className={menuOpen ? 'block' : 'hidden'}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link
                className="bg-darkBlue-900 text-gray-300 hover:no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/"
                component={RouterLink}
                color="inherit"
              >
                Home
              </Link>

              <Link
                className="bg-darkBlue-900 text-gray-300 hover:no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/about"
                component={RouterLink}
                color="inherit"
              >
                About
              </Link>

              <Link
                className="bg-darkBlue-900 text-gray-300 hover:no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/from"
                component={RouterLink}
                color="inherit"
              >
                Form
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
