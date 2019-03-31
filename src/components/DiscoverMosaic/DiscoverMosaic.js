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
  componentDidMount() {
    //   fetch(
    //     "https://api.listennotes.com/api/v1/podcasts/25212ac3c53240a880dd5032e547047b/recommendations?safe_mode=1",
    //     {
    //       headers: {
    //         "X-RapidAPI-Key": "cf4e5c8db7msh41757ca85a83017p122ddfjsn6c39dc48c906"
    //       }
    //     }
    //   )
    //     .then(res => res.json())
    //     .then(podcasts =>
    //       this.setState({
    //         podcasts: podcasts.recommendations.map(p => (
    //           <div className="thumbnail" key={p.id}>
    //             <img src={p.thumbnail} alt={p.title} />
    //           </div>
    //         ))
    //       })
    //     )
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

  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  render() {
    return (
      <>
        <div className="search-bar">
          <input type="text" onChange={this.handleInputChange} />
          <i
            id="searchIcon"
            className="fa fa-search"
            onClick={this.handleSearchClick}
          />
        </div>
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

// export default DiscoverMosaic