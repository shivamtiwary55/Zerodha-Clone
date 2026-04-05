import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* ✅ FIX: better alt text */}
      <img
        src="/Media/Images/logo.svg"
        alt="Zerodha logo"
        style={{ width: "50px" }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link
              className={selectedMenu === 0 ? activeMenuClass : menuClass}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={selectedMenu === 1 ? activeMenuClass : menuClass}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              className={selectedMenu === 2 ? activeMenuClass : menuClass}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              className={selectedMenu === 3 ? activeMenuClass : menuClass}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              Positions
            </Link>
          </li>
          <li>
            <Link
              className={selectedMenu === 4 ? activeMenuClass : menuClass}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              Funds
            </Link>
          </li>
          <li>
            <Link
              className={selectedMenu === 5 ? activeMenuClass : menuClass}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              Apps
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>

          {isProfileDropdownOpen && (
            <div className="dropdown">
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;