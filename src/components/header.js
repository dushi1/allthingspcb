import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { MenuItems } from "./Navbar/MenuItems"
import logo from "../images/logo.png"
import menu from "../images/menu.png"
import cancel from "../images/cancel.png"
import "./header.css"
import Button from "./Navbar/button"
class Header extends Component {
  state = {
    clicked: false,
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <>
        <header className="navbarItems">
          <div style={{ display: "flex" }}>
            <img src={logo} className="logo" />
            {/* <h2>ALL THINGS PCB</h2> */}
          </div>

          <div onClick={this.handleClick} className="box">
            {this.state.clicked ? (
              <img src={cancel} className="click" />
            ) : (
              <img src={menu} className="click" />
            )}
          </div>
          {/* <div className="menu-items"></div> */}
          <ul className="list">
            {MenuItems.map(item => {
              return (
                <li>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </header>
        {this.state.clicked
          ? MenuItems.map(item => {
              return <Button name={item.title} onClick={this.handleClick} />
            })
          : null}
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
