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
            <Link className="menu-option" to="/podcasts">Your podcasts</Link>
            <Link className="menu-option" to="/discover">Discover</Link>
            <div className="search-bar">
              <input type="text" onChange={this.handleInputChange} />
              <i
                id="searchIcon"
                className="fa fa-search"
                onClick={this.handleSearchClick}
              />
            </div>
          </div>
          <Route path="/discover" component={DiscoverMosaic} />
          <Route path="/podcasts" component={SubscriptionsMosaic} />
        </BrowserRouter>
        <PlayerControls />
      </>
    )
  }
}

// ========================================

ReactDOM.render(<Home />, document.getElementById("root"))
