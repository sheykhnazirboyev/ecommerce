import React, { Component } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import UserIcon from "../assets/user-icon.png";
import SearchIcon from "../assets/search-icon.png";
import ShoppingCard from "../assets/shopping-cart.png";
import HeartIcon from "../assets/heart.png";

export default class Navbar extends Component {
  render() {
    const activeClass = ({ isActive, isPending }) =>
      isPending ? "text-gray-300" : isActive ? "text-red-600" : "";

    return (
      <div className="py-4 px-8  flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} alt="Site logo" width="50px" height="32px" />
          <h1 className="text-2xl font-bol">Furnutire</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-4">
            <li>
              <NavLink className={activeClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeClass}>
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/cards" className={activeClass}>
                Cards
              </NavLink>
            </li>
            <li>
              <NavLink to="/checkout" className={activeClass}>
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <img src={UserIcon} alt="User Icon" />
          <img src={SearchIcon} alt="Search Icon" />
          <img src={HeartIcon} alt="Heart Icon" />
          <img src={ShoppingCard} alt="Shopping card Icon" />
        </div>
      </div>
    );
  }
}
