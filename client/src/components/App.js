import React from 'react'
import Landing from './Landing/Landing'
import NavBar from './NavBar/NavBarNotWorking'
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import ErrorPage from './ErrorPage/ErrorPage'
import SuccessPage from './SuccessPage/SuccessPage'
import Footer from './Footer/Footer'
import  './App.css'
import { BrowserRouter, Switch, Route} from "react-router-dom";

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
    }
  }

  render(){
    return(
      <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/error" component={ErrorPage} />
      <Route exact path="/success" component={SuccessPage} />
      <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
      </BrowserRouter>
    )
  }
}
