import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "#services", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Project", href: "#project", current: false },
  { name: "Help", href: "/", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="px-6 mx-auto max-w-7xl lg:py-4 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="flex items-center flex-1 sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex items-center flex-shrink-0">
                Boilerplate world
              </div>

              {/* LINKS */}

              <div className="hidden m-auto lg:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-black hover:opacity-100"
                          : "hover:text-black hover:opacity-100",
                        "px-3 py-4 text-lg font-normal opacity-75 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SIGNIN DIALOG */}

            <Signdialog />

            {/* REGISTER DIALOG */}

            <Registerdialog />

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block w-6 h-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
