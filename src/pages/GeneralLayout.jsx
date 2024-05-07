import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router";

export default class GeneralLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
