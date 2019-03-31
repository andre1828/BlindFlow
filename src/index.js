import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import DiscoverMosaic from "./components/DiscoverMosaic/DiscoverMosaic"
import PlayerControls from "./components/PlayerControls/PlayerControls"


class Home extends React.Component {
  render() {
    return (
      <>
        {/* <Menu /> */}
        <DiscoverMosaic />
        <PlayerControls />
      </>
    )
  }
}

// ========================================

ReactDOM.render(<Home />, document.getElementById("root"))
