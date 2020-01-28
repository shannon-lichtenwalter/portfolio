import React from 'react';
import projectList from './projectList';
import './Projects.css';

class Projects extends React.Component {
  state = {
    num:0
  }

  handlePrev = () => {
    let num = this.state.num;
    if(num === 0){
      num= 2;
    }else {
      num -= 1
    }
    this.setState({
      num
    })
  }

  handleNext = () => {
    let num= this.state.num;
    if(num === 2){
      num = 0;
    } else{
      num += 1
    }
    this.setState({
      num
    })
  }

  handleRenderIconGroup = () => {
    return projectList[this.state.num].techStack.map((icon, index) => {
      return <li key={index}><i className={`devicon-${icon}-plain colored`}></i></li>
      })
    }
  
  renderClassName = () => {
    let project = projectList[this.state.num]
    let className = 'project';
    if(project.image2){
      className += ' twoImages'
    }
    return className;
  }

  render(){
    let project = projectList[this.state.num]
    return(
    <section className='projects' tabIndex='0'>
      <button className='prev top-button' onClick={()=> this.handlePrev()}>{`<<`}</button>
      <button className='next top-button' onClick={()=> this.handleNext()}>{`>>`}</button>
      <h2 className='sectionHeading'> Projects</h2>
      {/* <div class="dashedLine"></div> */}
      <h3 aria-live='polite'>{project.name}</h3>
      <div className="project-image">
        <img className={this.renderClassName()}  src={project.image1} alt={project.image1alt}/>
        {project.image2 && <img className={this.renderClassName()} src={project.image2} alt={project.image2alt}/>}
      </div>
      <p aria-live='polite'>
        {project.description}
      </p>
      {/* <div className="dashedLine"></div> */}
      <div className="linksToProject">
        <h3>Created using:</h3>
        <ul className="iconGroup">
          {this.handleRenderIconGroup()}
        </ul>
        <ul>
          <li>
            See it Live: 
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"> 
              <i className="fas fa-laptop-code"></i>
            </a>
          </li>
          <li>
            See the Repo:
            <a href={project.clientRepo} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className='lower-buttons'>
        <button className='prev bottom-button' onClick={()=> this.handlePrev()}>{`<<`}</button>
        <button className='next bottom-button' onClick={()=> this.handleNext()}>{`>>`}</button>
      </div>
    </section>
    )
  }
}

export default Projects;