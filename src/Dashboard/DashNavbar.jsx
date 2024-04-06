import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Backle",
  email: "abc@example.com",
  imageUrl: "../src/assets/user.png",
};

const navigation = [
  { name: "Dashboard", href: "#", imageUrl: "./src/assets/dashboard.png", current: false },
  { name: "Patients", href: "#", imageUrl: "./src/assets/medical.png", current: false },
  { name: "Appointments", href: "#", imageUrl: "./src/assets/appointment.png", current: false },
  { name: "Reports", href: "#", imageUrl: "./src/assets/report (1).png", current: false },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashNavbar() {
  return (
    <div className="min-h-full flex">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="flex flex-col h-full">
              <div className="flex-shrink-0 px-8 py-5 justify-center items-center">
                <a href="/">
                  <img
                    className="h-10 w-auto"
                    src="./src/assets/logo (2).png"
                    alt="logo"
                  />
                </a>
              </div>

              <div className="flex-grow flex flex-col justify-between h-auto">
                <div className="flex flex-col items-center border-t border-gray-700 pt-6 pb-3 hover:bg-gray-700">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                  <div className="mt-2 text-sm font-medium leading-none text-white">
                    Account
                  </div>
                </div>
                <div className="flex flex-col space-y-4 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <div className="flex flex-col items-center border-t border-gray-700 pt-3 pb-0">
                        <img className="h-10 w-10" src={item.imageUrl} alt={item.name} /> 
                        <div className="mt-2 text-sm font-medium leading-none text-white">
                          {item.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                
              </div>
            </div>

            
          </>
        )}
      </Disclosure>
    </div>
  );
}
