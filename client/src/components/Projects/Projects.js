import React from "react";
import YouTube from 'react-youtube';
import tabshare from './tabshare.png'
export default class Resume extends React.Component {
  constructor() {
    super();
    this.state = {
      imageId: null
    };
  }

  handleImageClick = imageId => {
    if (this.state.imageId === imageId) {
      this.setState({ imageId: null });
    } else {
      this.setState({ imageId });
    }
  };

  render() {
    const opts = {
      height: '290',
      width: '440',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className="resume">
        <div className="resume-images">
        <img
          onClick={() => this.handleImageClick(1)}
          src={tabshare}
          style={{ width: 200 }}
          className="resumeIcons"
          alt="FlatIronLogo"
        />{" "}
        <img
          onClick={() => this.handleImageClick(2)}
          src={require("./flatironlogo.png")}
          style={{ width: 200 }}
          className="resumeIcons"
          alt="FlatIronLogo"
        />{" "}
        </div>
        {this.state.imageId === 1 ? (
          <div className="project">
            <YouTube
            className="video"
        videoId="1SlPoT17QRw"
        opts={opts}
        onReady={this._onReady}
      />
            <p id="text-resume">TabShare is an application that will help 
            splitting the bills of night’s out with friends: User can create 
            an event and add people to it, through a friend-list system, 
            have a quick and accurate way to settle a bill sharing, 
            see history of all the events and current open transactions<br />
            <br />
            Backend:Node.js,Express,Sequelize,MySQL,JWT<br/>
            Frontend:React.js,JWT<br />
            Styling:CSS Bootstrap
</p>
          </div>
        ) : null}
        {this.state.imageId === 2 ? (
          <div className="project">
            <h2>E-commerce</h2>
            <p id="text-resume">dsa</p>
          </div>
        ) : null}
      </div>
    );
  }
}
