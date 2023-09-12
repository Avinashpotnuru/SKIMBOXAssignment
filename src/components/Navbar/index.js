import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

import "./index.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Shopify</h1>
          <ul>
            <div className="links">
              <p>Solutions</p>
              <BsChevronDown />
            </div>
            <div>Pricing</div>

            <div className="links">
              <p>Resources</p>
              <BsChevronDown />
            </div>
          </ul>
        </div>
        <div className="login_block">
          <h1>login</h1>
          <button>start free trail</button>
        </div>
        <div className="block3">
          <a href="/">start free trail</a>
          <div onClick={() => setOpen((prev) => !prev)} className="toggle">
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <div className={open ? "nav-menu active" : "nav-menu"}>
        <ul>
          <div className="links">
            <p>Solutions</p>
            <BsChevronDown />
          </div>
          <div className="links">
            <p>Pricing</p>
          </div>

          <div className="links">
            <p>Resources</p>
            <BsChevronDown />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
