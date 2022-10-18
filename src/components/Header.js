import React from "react";
import search from "../images/icon/search.svg";
import account from "../images/icon/account.svg";
import "../css/style.css";

const Header = () => {
  return (
    <div className="header__section">
      <div className="header__inner d-flex justify-content-between align-items-center border-1 border-bottom border-dark">
        <div className="header__left">
          <div className="logo">
            <h2>
              <a href="index.html">Doje</a>
            </h2>
          </div>
        </div>
        <div className="header__right d-flex justify-content-between align-items-center">
          <div className="search">
            <img src={search} alt="icon" />
          </div>
          <div className="account">
            <a href="#">
              <img src={account} alt="icon" />
            </a>
            <div className="account__menu">
              <ul>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Log out</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="menubar">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
