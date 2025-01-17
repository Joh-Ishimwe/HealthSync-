import React from "react";
import { FaSearch } from "react-icons/fa";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';

const user = {
  name: '',
  email: '',
  imageUrl: '',
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function DashbarHor() {
  return (
    <div className="flex  bg-[#DDF4FC]  lg:w-[1300px]">
      <div className="px-20  py-6 flex items-center">
        <input type="text" placeholder="Search..." className="px-2" />
        <a href="">
          <div className="bg-[#00AFEE] px-2 h-7 border rounded">
            <FaSearch className="text-white mt-1" />
          </div>
        </a>
      </div>
      <Disclosure as="nav" className="bg-[#DDF4FC]">
        {({ open }) => (
          <div className="mt-[16px]  flex items-center fixed right-20"> 
            {/* Profile dropdown */}
            <button
              type="button"
              className="relative rounded-full bg-white p-1 mr-5  text-[#00afee] hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00afee]"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-10 w-10" aria-hidden="true" />
            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </Menu.Button>
              </div>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-[#00afee] ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-950'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            
          </div>
        )}
      </Disclosure>

    </div>
  );
}

export default DashbarHor;
