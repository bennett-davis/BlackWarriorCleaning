import React, { useState } from 'react';
import Link from 'next/link';
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
      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(51, 51, 51)"}}>
        <div class="container-fluid">
          <Link class="navbar-brand" href="/">Black Warrior Cleaning</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" href="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" href="/car_detailing">Car Detailing</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/soft_wash">Soft Washing</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/interior_cleaning">Interior Cleaning</Link>
              </li>
               
            </ul>
            <span class="navbar-text">
            (205)-861-3320
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CustomNavbar;