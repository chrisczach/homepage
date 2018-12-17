import React, { Component } from 'react';
import classes from './Splash.module.css';
import Typed from 'typed.js';
import './typed.css';

const strings = [
  "Hello, my name is Chris",
  "Hello, my name is",
  `Hello, my name is <span class="${classes.name}">Chris</span>^1000 <br><span class="${classes.welcome}" >Welcome!</span>`
]
class Splash extends Component {
  componentDidMount() {
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 25,
      backSpeed: 10,
      contentType: 'html',
      onComplete: this.props.hideSplash

    };
    // this.el refers to the <div> in the render() method
    this.typed = new Typed(this.el, options);
    //setTimeout(this.props.hideSplash, 6000);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() { 
    return (
      <section className={this.props.shown ? classes.splash : classes.splash + ' ' + classes.hide}>
        <div>
          <span className={classes.greeting} ref={(el) => { this.el = el; }}></span>
        </div>
        <div onClick={this.props.hideSplash} className={classes.close}><img className={classes.down} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTEyMS4zLDM0LjZjLTEuNi0xLjYtNC4yLTEuNi01LjgsMGwtNTEsNTEuMS01MS4xLTUxLjFjLTEuNi0xLjYtNC4yLTEuNi01LjgsMC0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTMuOSw1My45YzAuOCwwLjggMS44LDEuMiAyLjksMS4yIDEsMCAyLjEtMC40IDIuOS0xLjJsNTMuOS01My45YzEuNy0xLjYgMS43LTQuMiAwLjEtNS44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KPC9zdmc+Cg==" /></div>
      </section>
    )
  }
}

export default Splash;