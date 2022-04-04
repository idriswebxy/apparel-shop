import React, { Component } from "react"
import { Menu } from "semantic-ui-react"

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item href="/products">
          <h1>Apparel Shop</h1>
        </Menu.Item>

        <Menu.Item href="/products">All Products</Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === "sign-in"}
          href="/login"
        >
          Sign-in
        </Menu.Item>

        <Menu.Item
          name="register"
          active={activeItem === "register"}
          href="/register"
        >
          Register
        </Menu.Item>
      </Menu>
    )
  }
}
