import React from "react";
import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import data from './data.json';
const About = React.lazy(() => import('./About'));
const Portfolio = React.lazy(() => import('./Portfolio'));

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="

/*function getData(){
    var data;
    fetch('localhost:3000/data.json')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      data = myJson;
    });
    return data;
}
var appData = getData();*/

class AppContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: data
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let scrollTop = window.pageYOffset;
    if ( scrollTop > 0 ) {
      document.querySelector('nav').classList.add("scrolling-nav");
    } else {
      document.querySelector('nav').classList.remove("scrolling-nav");
    }
  }

  loadImages(){
    // This function is loaded after the Home and Portfolio pages are mounted
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ?
          item.src = item.dataset.src :
          item.style.backgroundImage = 'url("' + item.dataset.src + '")';
      };
    });
  }

  render(){
    return (
      <Router>
        <div style={{minHeight: '100vh'}}>
          <nav>
            <div className="grid-container">
              <ul>
                <li>
                  <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.376 13.896l-2.376.479.479-2.375 1.897 1.896zm-1.425-2.368l1.896 1.896 5.153-5.153-1.896-1.896-5.153 5.153zm3.31 3.311l-.094.08v2.241c-3.927.269-6.853 1.148-8.25 1.649v-11.74c2.705-1.602 7.582-2.172 10.083-2.303v-1.766c-4.202.128-8.307.804-11 2.481-2.693-1.677-6.798-2.353-11-2.481v15.904c3.608.11 7.146.624 9.778 1.829.775.355 1.666.356 2.444 0 2.633-1.205 6.169-1.718 9.777-1.829v-5.804l-1.738 1.739zm-10.178 3.969c-1.397-.5-4.322-1.38-8.25-1.649v-12.228c4.727.356 6.9 1.341 8.25 2.14v11.737zm4.959-4.263l.177-1.066-2.219.549v1.019l2.042-.502z"/></svg>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/></svg>
                    Portfolio
                  </Link>
                </li>
              </ul>
              <Link className="center" style={{textDecoration: 'none', margin: 'none'}} to="/"><h1 style={{margin: '0px'}}>Colette<strong>\Fleury</strong></h1></Link>
              <ul className="right">
                <li><a href="https://github.com/clfleury" target="new">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/colette-fleury-69776790/" target="new">LinkedIn</a></li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio loadImages={this.loadImages} />
            </Route>
            <Route path="/">
              <Home loadImages={this.loadImages} />
            </Route>
          </Switch>
          </Suspense>
        </div>
        <footer className="grid-container" style={{height: '60px', display: 'flex', alignItems: "center"}}><p style={{textAlign: 'center', fontSize: '15px', margin: '0px', padding: '0px'}}>&copy; 2020 Colette Fleury</p></footer>
      </Router>
    );
  }
}

/*class MobileButton extends React.Component{
  clickButton = () => {

  }
  render(){
    return (
      <div onClick={this.clickButton}>
      <span id="top-hamburger-line" style={{width: '27px', height: '4px', backgroundColor: '#fff', display: 'block', margin: '5px'}}></span>
      <span style={{width: '27px', height: '4px', backgroundColor: '#fff', display: 'block', margin: '5px'}}></span>
      <span id="bottom-hamburger-line" style={{width: '27px', height: '4px', backgroundColor: '#fff', display: 'block', margin: '5px'}}></span>
      </div>
    )
  }
}*/


class Home extends React.Component {

  componentDidMount() {
    this.props.loadImages();
  }

  render(){
    return (
      <div className="home fade-in">
        <div className="hero asyncImage" data-src={document.documentElement.classList.contains('webp') ? data.homebgs[Math.floor(Math.random() * data.homebgs.length)].webp : data.homebgs[Math.floor(Math.random() * data.homebgs.length)].fallback} style={{ backgroundImage: "url('none')"}}>
        </div>
        <div className="hero-content">
          <svg version="1.1" id="svgDiv" viewBox="0 0 718.6 510.6"><path className="st0 letters" d="M26.7,43.1l163.3-10.4c0,0-49.3,34.3-60.8,77.1c-17.8,65.9-24.3,190.2-2.1,257.8 c15.1,45.8,84.7,29.2,100.4,26.8c15.6-2.4,138.8-26.8,279.3,23.4C359.3,409,247,409,45.7,499.1C45.7,499.1,141.3,171,26.7,43.1z" ></path><path className="st0 letters" d="M229.5,86.6c0,0-75.6-11.6-80.7,141.3c-5,148.1,73.6,138,73.6,138S311,381.5,311,238.8 C311,73.1,229.5,86.6,229.5,86.6z M230.7,329.1c0,0-38.5,10-38.5-101.5c0-102.6,38.5-100.9,38.5-100.9s36-7.2,36,97 C266.7,335.8,230.7,329.1,230.7,329.1z"></path><path className="st0 letters" d="M479.2,38.1c0,0,46.2,34.3,46.2,82.9s6.1,210.7-22.6,244.8c0,0,37.7,14.5,51.1,26.2V285 c0,0,123.8,88.6,53.5,150.5c0,0,87-5.6,60.2-69.7c0,0-46.2-69.1-92.2-115.9c0,0,60.4-147.7,129-167.5l-92,10.3 c0,0,19.2-2.1-55.2,108.7v-119L479.2,38.1z" ></path><path className="st0 letters" d="M410.1,86.6c0,0-75.6-11.6-80.7,141.3c-5,148.1,73.6,138,73.6,138s88.6,15.6,88.6-127.1 C491.6,73.1,410.1,86.6,410.1,86.6z M411.3,329.1c0,0-38.5,10-38.5-101.5c0-102.6,38.5-100.9,38.5-100.9s36-7.2,36,97 C447.3,335.8,411.3,329.1,411.3,329.1z"></path></svg>
          <div className="hero-cta">
            <h2>AROUND YOU.<strong> LOOK UP!</strong></h2>
            <h3> BE HUMBLED. BE CURIOUS. BE INSPIRED.</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default function App(){
  return <AppContainer />;
}
