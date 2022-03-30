import React, { useState } from "react"
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  NavItem,
  Collapse,
} from "reactstrap"

export default function MenuBar() {
  const [isOpen, setToggle] = useState(false)

  return (
    <div>
      <Navbar color="secondary" light>
        <NavbarToggler
          className="me-2"
          onClick={() => setToggle(isOpen ? false : true)}
        />
        <NavbarBrand className="me-auto" href="/">
          Apparel Store
        </NavbarBrand>
        <Collapse navbar isOpen={isOpen}>
          <Nav navbar>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">Cart</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
