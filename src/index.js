import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Route, Link } from "react-router-dom"
import DiscoverMosaic from "./components/DiscoverMosaic/DiscoverMosaic"
import SubscriptionsMosaic from "./components/SubscriptionsMosaic/SubscriptionsMosaic"
import PlayerControls from "./components/PlayerControls/PlayerControls"

class Home extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="menu">
            <div className="search-bar">
              <input type="text" onChange={this.handleInputChange} />
              <i
                id="searchIcon"
                className="fa fa-search"
                onClick={this.handleSearchClick}
              />
            </div>
          </div>
          <Route path="/" component={DiscoverMosaic} />
        </BrowserRouter>
        <PlayerControls />
      </>
    )
  }
}

// ========================================

ReactDOM.render(<Home />, document.getElementById("root"))
