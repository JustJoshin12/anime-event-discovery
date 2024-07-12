import { Disclosure, Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const logo = "/images/websiteLogo.png";
const userAvatar = "/images/avatarIcons/tengen.gif";

export default function NavBar() {
  return (
    <Disclosure as="nav" className="shadow-2xl bg-galactic-background/65 py-2">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center lg:pr-12">
              <Image
                alt="Website Logo"
                width={100}
                height={100}
                src={logo}
                className="h-24 w-24"
              />
            </div>
            <div className="hidden text-lg lg:ml-6 sm:flex lg:space-x-8 xl:space-x-16  text-galactic-accent">
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-4 pt-1 font-medium duration-200 hover:border-galactic-secondary hover:text-black hover:bg-galactic-primary/60"
              >
                Home
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-4 pt-1 font-medium duration-200 hover:border-galactic-secondary hover:text-black hover:bg-galactic-primary/60"
              >
                Events
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-4 pt-1 font-medium duration-200 hover:border-galactic-secondary hover:text-black hover:bg-galactic-primary/60"
              >
                News
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-4 pt-1 font-medium duration-200 hover:border-galactic-secondary hover:text-black hover:bg-galactic-primary/60"
              >
                Profile
              </a>
            </div>
          </div>

          {/*userIcon conponent */}
          <UserProfileMenu />

          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <Disclosure.Button
            as="a"
            href="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >
            Dashboard
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Team
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Projects
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Calendar
          </Disclosure.Button>
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <Image
                alt=""
                width={32}
                height={32}
                src={userAvatar}
                className="h-10 w-10 rounded-full "
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                ThatFla$hyBoi
              </div>
              <div className="text-sm font-medium text-gray-500">
                Joshua Smith
              </div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <Disclosure.Button
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Your Profile
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Settings
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Sign out
            </Disclosure.Button>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}

const UserProfileMenu = () => {
  const glowingBorder = {
    initial: { borderColor: "#00f6ff", boxShadow: "0 0 10px #00f6ff" },
    animate: {
      boxShadow: [
        "0 0 10px #00f6ff",
        "0 0 20px #ff00ff",
        "0 0 30px #00f6ff",
        "0 0 40px #ff00ff",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="hidden sm:flex sm:items-center bg-galactic-secondary/50  sm:p-2 lg:p-4 my-1 rounded-badge"
      initial="initial"
      animate="animate"
      variants={glowingBorder}
    >
      {/* Profile dropdown */}
      <Menu as="div" className="relative">
        <div className="flex gap-3">
          <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute -inset-1.5 rounded-full" />
            <span className="sr-only">Open user menu</span>
            <Image
              alt=""
              width={100}
              height={100}
              src={userAvatar}
              className="h-16 w-16 rounded-full border-2 border-galactic-primary"
            />
          </Menu.Button>
          <div className="text-sm lg:text-base flex flex-col justify-center font-extrabold text-galactic-text p-2 rounded-badge">
            <span>ThatFla$hyBoi</span>
            <span>Joshua Smith</span>
          </div>
        </div>
        <Menu.Items
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 duration-150 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100" : "text-gray-700"
                }`}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100" : "text-gray-700"
                }`}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100" : "text-gray-700"
                }`}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </motion.div>
  );
};
