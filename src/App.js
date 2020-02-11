import React from 'react';
import logo from './logo.svg';
import './App.css';

var hasOwn = {}.hasOwnProperty;

function classNames () {
  var classes = '';

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes += ' ' + arg;
    } else if (Array.isArray(arg)) {
      classes += ' ' + classNames.apply(null, arg);
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes += ' ' + key;
        }
      }
    }
  }

  return classes.substr(1);
}

class SlideShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      activeIndex: 0,
      maxIndex : this.props.slides.length,
      slides : this.props.slides
    };
    this.jumpToSlide = this.jumpToSlide;
  }

  slideTimer (delay) {

    console.log('sliderTimer started ' + delay  )

    var currentSlide = this.state.activeIndex;
    var next = this.state.activeIndex + 1;
    if ( currentSlide == (this.state.maxIndex - 1)) {
      next = 0;
    }
    setTimeout( () => {
      console.log('sliderTimer Expired')
      this.jumpToSlide(next)
    }, delay * 1000)
  }

  jumpToSlide(index) {
    this.slideTimer (this.state.slides[index].delay) 
    this.setState({ 
      activeIndex: index 
    });
  }

  render() {
    return (
      <div className="slideshow">
        <ul className="slideshow-slides">
          {
            this.props.slides.map((slide, index) => (
              <li className={ classNames({ active: index == this.state.activeIndex }) }>
                <figure>
                  <img src={ slide.imageUrl } />
                  { slide.caption ? <figcaption>{ slide.caption }</figcaption> : null }
                </figure>
              </li>
            ))
          }
        </ul>
        <ul className="slideshow-dots">
          {
            this.props.slides.map((slide, index) => (
              <li className={ (index == this.state.activeIndex) ? 'active': '' }>
                <a onClick={ (event)=> this.jumpToSlide(index) }>{ index + 1 }</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

let _slides = [{
  imageUrl: "https://i.ytimg.com/vi/MxwjEacvrtY/hqdefault.jpg",
  caption: "Allan Allan Al Al Allan",
  delay : 4
}, {
  imageUrl: "https://pbs.twimg.com/profile_images/2576554888/s8vftzr3j0a9r703xdfn.jpeg",
  caption: "Steve Steve Steve",
  delay: 3
}];

class App extends React.Component {
  render() {
    return <SlideShow slides={ _slides } />
  }
}

export default App;
