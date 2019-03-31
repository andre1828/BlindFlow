import React from "react"

export default class SubscriptionsMosaic extends React.Component {
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
    }
    render() {
      return (
        <>
          <div className="mosaic">{this.state.podcasts}</div>
        </>
      )
    }
  }