import { BrandLogo } from "../assets";
import {
  FaMapMarkerAlt,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";
import { HoverButton } from "./HoverButton";

const nav = [
  { id: 1, text: "Location", icon: <FaMapMarkerAlt /> },
  { id: 2, text: "About", icon: <FaInfoCircle /> },
  { id: 3, text: "Contacts", icon: <FaEnvelope /> },
];
const Navbar: React.FC = () => {
  const [navClose, setNavClose] = useState(false);
  return (
    <nav className="sticky top-0 bg-bg_color z-10 w-full flex items-center justify-between py-4 px-4 md:px-10 shadow-md">
      <div className="flex items-center">
        <img src={BrandLogo} className="w-32 md:w-40" alt="logo" />
      </div>

      <div className="relative">
        <div
          className={`flex flex-col md:flex-row items-center gap-5 md:gap-10 absolute md:relative bg-bg_color right-0 top-[64px] md:top-0 md:p-0 rounded-bl-3xl transition-all md:h-full ${
            !navClose ? "h-0 p-0" : "p-6"
          } overflow-hidden shadow-2xl md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-5 text-sm font-medium cursor-pointer">
            {nav.map((el) => (
              <li
                key={el.id}
                className="flex items-center gap-2 text-slate-700 hover:text-purple-800"
              >
                {el.icon} <span>{el.text}</span>
              </li>
            ))}
          </ul>
          <div className="border-b-2 hover:border-purple-500">
            <HoverButton />
          </div>
        </div>
        <label className="hamburger md:hidden">
          <input
            type="checkbox"
            checked={navClose}
            onClick={() => setNavClose(!navClose)}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
};

export { Navbar };
