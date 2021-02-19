import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "./Nav";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => (
    <>
    <Nav />
    <main>
        <Container>
            { children }
        </Container>
    </main>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout