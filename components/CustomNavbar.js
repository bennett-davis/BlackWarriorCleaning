import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="py-4 px-3" color="dark" dark expand="md">
        <NavbarBrand href="/">Black Warrior Cleaning Pros</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/car_detailing">Car Detailing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/soft_wash">Soft Wash</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/interior_cleaning">Interior Cleaning</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
        <NavbarText>(205) 861-3320</NavbarText>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;