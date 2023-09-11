import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import searchIcon from "../images/icons/search-icon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img
          className="header-searchIcon"
          src={searchIcon}
          alt="search-icon"
        />
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <div className="header-optionLineOne">Hello Guests</div>
            <div className="header-optionLineTwo ">Sign In</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo ">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo ">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
          <img src={shoppingCart} alt="shopping-cart"/>
          <span className="header-optionLineTwo header-basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
