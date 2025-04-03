import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import styles from './header.module.css';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
        <section id={styles.headerContainer}>
        <Navbar {...args} expand="md">
            <NavbarBrand href="/">Michael Balogun</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className={styles.navLinks} navbar>
            <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    About
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    Education
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    Work Experience
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    Projects
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    Tech Stack
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    Contact Me
                </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </section>
    </>
  );
}

export default Header;