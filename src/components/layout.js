import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "./Nav";

const Layout = ({ children }) => (
    <>
    <Nav />
    <main>{ children }</main>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout