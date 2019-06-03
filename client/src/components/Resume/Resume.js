import React from 'react'
import './Resume.css'
export default class Resume extends React.Component{
  constructor(){
    super()
    this.state={
      imageId : null
    }
  }

  handleImageClick = imageId => {
      if (this.state.imageId === imageId){
      this.setState({ imageId : null })
    }else{
      this.setState({ imageId })
    }
  }

  render(){
    return(
      <div className="resume">
        <img
        onClick={()=>this.handleImageClick(1)}
        src={require('./flatironlogo.png')}
        style={{ width : 200 }}
        className="resumeIcons"
        alt="FlatIronLogo"
        />        <img
                onClick={()=>this.handleImageClick(2)}
                src={require('./flatironlogo.png')}
                style={{ width : 200 }}
                className="resumeIcons"
                alt="FlatIronLogo"
                />        <img
                        onClick={()=>this.handleImageClick(3)}
                        src={require('./flatironlogo.png')}
                        style={{ width : 200 }}
                        className="resumeIcons"
                        alt="FlatIronLogo"
                        />
        { this.state.imageId === 1
          ? <p id="text" style={{float:"right"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e
          sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non p
          roident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          : null
        }
        { this.state.imageId === 2
          ? <p id="text" style={{float:"right"}}>2222222, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e
          sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non p
          roident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          : null
        }
        { this.state.imageId === 3
          ? <p id="text" style={{float:"right"}}>3333333adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e
          sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non p
          roident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          : null
        }
      </div>
    )
  }
}
