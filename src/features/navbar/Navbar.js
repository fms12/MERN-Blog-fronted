import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <>
      <Disclosure
        as="nav"
        className="shadow-sm lg:overflow-y-visible fixed inset-0 z-40 overflow-y-auto"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 z-40">
              <div className="flex h-20 justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex items-center ">
                      <Link
                        to={"/"}
                        className="flex justify-center items-center"
                      >
                        <img
                          className="h-10 w-auto rounded-full border"
                          src="https://tailwindui.com/img/logos/mark.svg?color=black"
                          alt=""
                        />
                        <span className="font-extrabold text-xl border px-2 border-l-0">
                          Blog
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 mr-7">
                    <div className="ml-10 space-x-6 justify-cennter items-center lg:space-x-0 lg:flex-col lg:space-y-4">
                      <Link
                        to={"/"}
                        className="text-base font-medium text-black lg:mb-2 mr-6"
                      >
                        Home
                      </Link>
                      <Link
                        to={"/create-post"}
                        className="text-base font-medium text-black lg:mb-2"
                      >
                        Write
                      </Link>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex justify-center ">
                    <Link
                      to={"/login"}
                      className="relative inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mr-3"
                    >
                      Sign in
                    </Link>
                    <Link
                      to={"/signup"}
                      className="relative inline-flex items-center gap-x-1.5 rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white p-2"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 ">
                <Disclosure.Button className="text-gray-300  hover:text-white flex ">
                  <Link
                    to={"/"}
                    className="text-base font-medium text-black lg:mb-2 hover:text-white hover:bg-black p-2 rounded-full w-20"
                  >
                    Home
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button className="text-gray-300  hover:text-white flex ">
                  <Link
                    to={"/create-post"}
                    className="text-base font-medium text-black lg:mb-2 hover:text-white hover:bg-black p-2 rounded-full w-20"
                  >
                    Write
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
