/** @format */

import Link from "next/link";
import { useState } from "react";
import {
  HiOutlineChevronDown,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

export default function Menu() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <div
      id="menu"
      className="bg-white/75 backdrop-blur-sm border-b border-gray-200 py-3 fixed top-0 left-0 w-full z-30"
    >
      <div className="main-box flex items-center justify-between px-4 sm:px-0">
        <div className="logo flex items-center justify-between w-full sm:inline sm:w-auto">
          <Link href="/">
            <a className="flex items-center gap-2">
              Nextor{" "}
              <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 font-normal rounded-lg">
                0.1.0
              </span>
            </a>
          </Link>
          {visible ? (
            <HiOutlineX
              className="active:text-gray-400 text-gray-600 sm:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <HiOutlineMenuAlt3
              onClick={toggleMenu}
              className="active:text-gray-400 text-gray-600 sm:hidden"
            />
          )}
        </div>
      </div>
    </div>
  );
}
