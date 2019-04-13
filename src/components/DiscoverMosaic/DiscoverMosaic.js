import React from "react"
import './DiscoverMosaic.css'

export default class DiscoverMosaic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      podcasts: [],
      searchTerm: ""
    }

    this.colors = [
      "#1fe46f",
      "#1fe46f",
      "#1fe46f",
      "#f9cee5",
      "#d32776",
      "#fdf73e"
    ]

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleInputChange(e) {
    var searchTerm = e.target.value

    this.setState({ searchTerm: searchTerm })
  }

  handleSearchClick() {
    if (this.state.searchTerm === "") return

    const url = `https://gpodder.net/search.json?q=${this.state.searchTerm
      .split(" ")
      .join("+")}`
    // const url = "https://jsonplaceholder.typicode.com/photos/"

    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => this.setState({ podcasts: res.splice(0, 20) }))
  }

  componentDidMount() {
    fetch("https://gpodder.net/toplist/10.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => this.setState({ podcasts: res.splice(0, 20) }))
  }

  render() {
    return (
      <>
        <div className="mosaic">
          {this.state.podcasts.map((p, index) => (
            <div className="thumbnail" key={index}>
              <img
                src={
                  p.logo_url === null ? require("../../earphones.png") : p.logo_url
                }
                alt={p.title}
              />
            </div>
          ))}
        </div>
      </>
    )
  }
}
