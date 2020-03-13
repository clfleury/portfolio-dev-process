import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import data from './data.json';

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
  render(){
    return (
      <Router>
        <div>
          <nav>
            <Link style={{textDecoration: 'none', margin: 'none'}} to="/"><h1 style={{margin: '0px'}}>Colette<strong>\Fleury</strong></h1></Link>
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
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
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

class ProjectList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      currentProject: 0
    }

  }

  toggleModal = (project_num) => {
    this.setState(prev=>({currentProject: project_num, isModalOpen: !prev.isModalOpen}));
  }

  toggleProjectsForward = () => {
    if(this.state.currentProject < data.portfolio.length - 1) {
      this.setState(prev => ({
        currentProject: prev.currentProject + 1
      }));
      //console.log()
    } else {
      this.setState({
        currentProject: 0
      });
    }
  }

  toggleProjectsBackward = () => {
    if(this.state.currentProject > 0) {
      this.setState(prev => ({
        currentProject: prev.currentProject - 1
      }));
    } else {
      this.setState({
        currentProject: data.portfolio.length - 1
      });
    }
  }

  render(){
    return (
      <div className="portfolio-container fade-in">
       <div className="portfolio-style">
      {data.portfolio.map(function(data, key){
        return(
          <ProjectItem projectData={data} key={key} onOpen={e => {this.toggleModal(data.project_num)}} isOpen={this.state.isModalOpen} />
        )
      }, this)}
      </div>
      <Modal className="fade-in" isOpen={this.state.isModalOpen}>
      <div onClick={e => {this.toggleModal(this.state.currentProject)}} style={{padding: '30px', float: 'left'}}>
        <svg style={{fill:'#ffffff'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path pointerEvents="all" d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
      </div>
        <div onClick={this.toggleProjectsForward} style={{float: 'right', padding: '30px', paddingLeft: '8px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path style={{fill:'#ffffff'}} d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </div>
        <div onClick={this.toggleProjectsBackward} style={{float: 'right', padding: '30px', paddingRight: '8px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path style={{fill:'#ffffff'}} d="M11,23l2.8-2.8L7.6,14H24v-4H7.6l6.2-6.2L11,1L0,12L11,23z"/>
          </svg>
        </div>
        <div className="content">
          <h2 className="fade-in" style={{color: '#ffffff', marginTop: '40px', clear: "both", userSelect: 'none'}}>{data.portfolio[this.state.currentProject].project_name}</h2>
          <h3 className="fade-in" style={{color: '#ffffff', clear: "both", lineHeight: '0', paddingBottom: '40px'}}>{data.portfolio[this.state.currentProject].date}</h3>
          <div className="fade-in featured-image" style={{backgroundImage: 'url(' + data.portfolio[this.state.currentProject].image + ')'}}></div>
          <p className="fade-in" style={{color: '#ffffff', clear: "both", padding: '40px 0px 20px 0px'}}>{data.portfolio[this.state.currentProject].description}</p>
          <img src={data.portfolio[this.state.currentProject].image} className="fade-in" />
          {data.portfolio[this.state.currentProject].modal_images.map(function(data, key){
            return( <img src={data} key={key} className="fade-in" /> )
          }, this)}
        </div>
      </Modal>
      </div>
    )
  }
}

class ProjectItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  render(){
    const divStyle = {
      backgroundImage: 'url(' + this.props.projectData.image + ')',
      backgroundSize: 'cover'
    };
    return (
      <div className="portfolio-item">
        <div className="portfolio-image" style={divStyle} onClick={e => {this.props.onOpen();}}></div>
      </div>
    )
  }
}

class Modal extends React.Component{
  render(){
    if (!this.props.isOpen){
      return null;
    }
    return (
      <div className="project-modal">
      {this.props.children}
      </div>
    )
  }
}

class Home extends React.Component {
  render(){
    return (
      <div className="home fade-in">
        <div className="hero" style={{backgroundImage: "url('" + data.homebgs[Math.floor(Math.random() * data.homebgs.length)] + "')"}}>
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

class About extends React.Component {
  render(){
    return (
      <div className="content fade-in">
        <h2 className="page-title">Who am <strong>I?</strong></h2>
        {data.about.map(function(data, key) {
          return( <p key={key}>{data}</p> )
        }, this)}
      </div>
    )
  }
}

class Portfolio extends React.Component {
  render(){
    return (
      <div className="portfolio fade-in">
      <div className="content" style={{marginBottom: '0px', marginTop: '10px'}}>
        <h2 className="page-title">My <strong>Work</strong></h2>
        </div>
        <ProjectList />
      </div>
    );
  }
}

export default function App(){
  return <AppContainer />;
}
