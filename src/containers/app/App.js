import React, { Component } from 'react';
import classes from './App.module.css';
import Nav from '../../components/nav/Nav';
import Splash from '../../components/splash/Splash.js';

class App extends Component {
  state = {
    orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
    navOpen: false,
    showSplash: true
  }
  
  setOrientation = () => this.setState({ orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape' })
  navClickHandler = () => this.setState(state => ({ navOpen: !state.navOpen }))
  hideSplashHandler = () => this.setState({ showSplash: false });

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
        test
      </main>
    );
  }
}

export default App;
