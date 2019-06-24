import React from 'react'
import { Document, Page } from "react-pdf";
import resume from "./Resume.pdf"
export default class Resume extends React.Component{
  constructor(){
    super()
    this.state={
      imageId : null,
      numPages: null, 
      pageNumber: 1
    }
  }

  handleImageClick = imageId => {
      if (this.state.imageId === imageId){
      this.setState({ imageId : null })
    }else{
      this.setState({ imageId })
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };


  render(){
    const { pageNumber } = this.state;
    return(
      <div className="resume">
         <Document onLoadError={console.error}
          file={resume} 
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <div className="pdf">
         <Page onLoadError={console.error} pageNumber={pageNumber} style={{style: "position: unset"}}/>
         </div>
        </Document>
      </div>
    )
  }
}
