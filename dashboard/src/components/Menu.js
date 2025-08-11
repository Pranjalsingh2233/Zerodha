import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import axios from "axios";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [isMenuDropdown, setIsMenuDropdown] = useState(false);
  const [user, setUser] = useState("User");

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };
  const handleDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleClick = (e) => {
    e.stopPropagation();
    setIsMenuDropdown((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuDropdown) {
      const handleOutsideClick = (e) => {
        if (
          !e.target.closest(".dropdown") &&
          !e.target.closest(".dropdown-btn")
        ) {
          setIsMenuDropdown(false);
        }
      };

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [isMenuDropdown]);

  useEffect(() => {
    const verifyUser = async () => {
      const { data } = await axios.post(
        "https://zerodha-6yfr.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      if (status) {
        setUser(user);
      } else {
        console.log(status);
      }
    };
    verifyUser();
  }, []);

  return (
    <div className="menu-container">
      <img src="logo.png" alt="dashboard-logo" style={{ width: "50px" }} />
      <div className="menu display">
        <span
          className="dropdown-btn"
          onClick={handleClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          Menu {isMenuDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <ul id={isMenuDropdown ? "dropdown" : "display-none"}>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleDropdown}>
          <div className="avatar">{user[0]?.toUpperCase()}</div>
          <p className="username">{user}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
