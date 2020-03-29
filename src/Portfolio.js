import React from "react";
import data from './data.json';

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
          <div className="fade-in featured-image" style={document.documentElement.classList.contains('webp') ? {backgroundImage: 'url(' + data.portfolio[this.state.currentProject].image.webp + ')'} : {backgroundImage: 'url(' + data.portfolio[this.state.currentProject].image.fallback + ')'}}></div>
          <p className="fade-in" style={{color: '#ffffff', clear: "both", padding: '40px 0px 20px 0px'}}>{data.portfolio[this.state.currentProject].description}</p>
          <img src={document.documentElement.classList.contains('webp') ? data.portfolio[this.state.currentProject].image.webp : data.portfolio[this.state.currentProject].image.fallback} className="fade-in" />
          {data.portfolio[this.state.currentProject].modal_images.map(function(data, key){
            var dataImg;
            document.documentElement.classList.contains('webp') ? dataImg = data.webp : dataImg = data.fallback;
            return( <img src={dataImg} key={key} className="fade-in" /> )
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
      backgroundImage: document.documentElement.classList.contains('webp') ? 'url(' + this.props.projectData.image.webp + ')' : 'url(' + this.props.projectData.image.fallback + ')',
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

export default class Portfolio extends React.Component {
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
