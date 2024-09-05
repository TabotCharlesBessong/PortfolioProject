import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
import { navItems } from "../../constant/data";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px ${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-[#17dd1f]" : "text-[#fff]"
              } font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
