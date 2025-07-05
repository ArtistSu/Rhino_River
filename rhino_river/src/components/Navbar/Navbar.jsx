import React from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../utility/animation";

const NavbarLinks = [
  {
    id: 1,
    title: "Home",
    line: "/",
  },
  {
    id: 2,
    title: "Features",
    line: "#",
  },
  {
    id: 3,
    title: "Shop",
    line: "#",
  },
  {
    id: 4,
    title: "About us",
    line: "#",
  },
  {
    id: 5,
    title: "Contact",
    line: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="py-4 container flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <img src={Logo} alt="" className="w-[70px] rounded-b-full" />
          {/* <p className="font-bold text-xl"> RR </p> */}
        </div>
        {/* Link Section */}
        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-4">
            {NavbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="hover:text-primary uppercase text-sm xl:text-base"
                    herf={link.link}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Button Section */}
        <div>
          <button className="primary-btn">Request For Quotes</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
