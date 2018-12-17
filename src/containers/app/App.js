import React, { Component } from 'react';
import classes from './App.module.css';
import Nav from '../../components/nav/Nav';
import Splash from '../../components/splash/Splash.js';
import Popup from '../../components/projects/popup/Popup';
import Projects from '../../components/projects/Projects';

class App extends Component {
  state = {
    orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
    navOpen: false,
    showSplash: true,
    showPopup: false,
    popupObject: {url: null},
    projects: [
      { url: 'https://winniematch.chrisczach.com', title: 'Winnie Match', description: 'A card matching game built using ReactJS.' },
      { url: 'https://winniepuzzle.chrisczach.com', title: 'Winnie Puzzle',description: 'A puzzle game built using ReactJS.'  }
    ]
  }
  
  setOrientation = () => this.setState({ orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape' });
  navClickHandler = () => this.setState(state => ({ navOpen: !state.navOpen }));
  hideSplashHandler = () => this.setState({ showSplash: false });
  togglePopupHandler = (popupObject = {url: null}) => this.setState(state => ({ showPopup: !state.showPopup, popupObject }));

  componentDidMount() {
    window.addEventListener('resize', this.setOrientation);
    window.addEventListener('deviceorientation', this.setOrientation);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setOrientation);
    window.removeEventListener('deviceorientation', this.setOrientation);
  }
  render() {
    return (
      <main className={classes.main}>
        <Nav navClick={this.navClickHandler} navOpen={this.state.navOpen} orientation={this.state.orientation} />
        <Splash hideSplash={this.hideSplashHandler} shown={this.state.showSplash}/>
        <Projects projects={this.state.projects} showPopup={this.state.showPopup} popupObject={this.state.popupObject} togglePopupHandler={this.togglePopupHandler}/>
      </main>
    );
  }
}

export default App;
