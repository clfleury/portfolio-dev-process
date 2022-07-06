import React from "react";
import { data } from "./App.js";
import { Modal } from "./Modal.js";
import { PortfolioContext } from './site-contexts';


//console.log(data);
class ProjectList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      currentProject: 0
    }
  }

  toggleModal = (project_num) => {
    this.setState(
      prev=>({currentProject: project_num, isModalOpen: !prev.isModalOpen}),
      () => {this.state.isModalOpen === true ? document.querySelector('body').classList.add('modal-open') : document.querySelector('body').classList.remove('modal-open') }
    );
  }

  render(){
    return (
      <PortfolioContext.Provider value={this.state}>
        <div className="portfolio-container fade-in">
          <div className="portfolio-style">
          {data.portfolio.map(function(data, key){
            return(
              <ProjectItem projectData={data} key={key} onOpen={e => {this.toggleModal(data.project_num)}} isOpen={this.state.isModalOpen} />
            )
          }, this)}
          </div>
          <Modal data={data} projectNum={this.state.currentProject} toggleModal={this.toggleModal} />
        </div>
      </PortfolioContext.Provider>
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
      backgroundImage: 'url("' + this.props.imagePlaceHolder + '")',
      backgroundSize: 'cover'
    };
    return (
      <div className="portfolio-item">
        <div className="portfolio-image asyncImage" data-src={document.documentElement.classList.contains('webp') ? this.props.projectData.image.webp : this.props.projectData.image.fallback } style={divStyle} onClick={e => {this.props.onOpen();}}>
          <div className="display-name">{this.props.projectData.project_name}</div>
        </div>
      </div>
    )
  }
}

export default class Portfolio extends React.Component {

  componentDidMount() {
    this.props.loadImages();
  }

  render(){
    return (
      <div className="portfolio fade-in">
      {this.props.loading ? <div>loading</div> :
      <div>
        <div className="hero-secondary" style={{ backgroundImage: document.documentElement.classList.contains('webp') ? "url(" + data.homebgs[Math.floor(Math.random() * data.homebgs.length)].webp + ")" : "url(" + data.homebgs[Math.floor(Math.random() * data.homebgs.length)].fallback + ")" }}>
        </div>
        <div className="content" style={{marginBottom: '0px', marginTop: '10px'}}>
          <h2 className="page-title">My<strong>\Work</strong></h2>
          <hr />
        </div>
        <ProjectList />
      </div>
      }
      </div>
    );
  }
}
