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
  }
  render() {
    return (
      <>
        <div className="mosaic">
          {this.state.podcasts.length === 0 ? (
            <div>Your are not subscribed to any podcasts</div>
          ) : (
            this.state.podcasts.map(podcast => (
              <div className="thumbnail" key={podcast.id}>
                <img src={podcast.thumbnailUrl} alt={podcast.title} />
              </div>
            ))
          )}
        </div>
      </>
    )
  }
}
