import React from 'react'
import './PlayerControls.css'

export default class PlayerControls extends React.Component {
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