import React from 'react'
import { Document, Page } from "react-pdf";
import resume from "./resume.pdf"
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
    const { pageNumber, numPages } = this.state;
    return(
      <div className="resume">
         <Document 
          file={resume} 
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <div className="pdf">
         <Page pageNumber={pageNumber} style={{style: "position: unset"}}/>
         </div>
        </Document>
      </div>
    )
  }
}
