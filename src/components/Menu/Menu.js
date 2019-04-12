import React from "react"
import "./Menu.css"

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <p className="menu-option">Your podcasts</p>
        <p className="menu-option"> Discover</p>
        <div className="search-bar">
          <input type="text" onChange={this.handleInputChange} />
          <i
            id="searchIcon"
            className="fa fa-search"
            onClick={this.handleSearchClick}
          />
        </div>
      </div>
    )
  }
}
