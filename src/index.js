import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import DiscoverMosaic from "./components/DiscoverMosaic/DiscoverMosaic"
import "./player-controls.css"

class SubscriptionsMosaic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thumbs: [],
      podcasts: []
    }
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/photos/")
    //   .then(res => res.json())
    //   .then(res => {
    //     var thumbs = res.splice(0, 20)
    //     // console.log(thumbs)
    //     this.setState({ thumbs: thumbs })
    //     this.setState({
    //       podcasts: this.state.thumbs.map(t => (
    //         <div className="thumbnail" key={t.id}>
    //           <img src={t.thumbnailUrl} alt={t.title} />
    //         </div>
    //       ))
    //     })
    //   })
    fetch(
      "https://api.listennotes.com/api/v1/podcasts/25212ac3c53240a880dd5032e547047b/recommendations?safe_mode=1",
      {
        headers: {
          "X-RapidAPI-Key": "cf4e5c8db7msh41757ca85a83017p122ddfjsn6c39dc48c906"
        }
      }
    )
      .then(res => res.json())
      .then(json => console.log(json))
  }
  render() {
    return (
      <>
        <div className="mosaic">{this.state.podcasts}</div>
      </>
    )
  }
}

class PlayerControls extends React.Component {
  render() {
    return (
      <div className="player-controls">
        <i className="fas fa-angle-left" />
        <i id="play-button" className="fas fa-play" />
        <i className="fas fa-angle-right" />
      </div>
    )
  }
}

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
