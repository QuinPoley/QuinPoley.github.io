import React, { useState } from 'react';
import './App.css';
import SimpleTabs from './TabsPanel';
import {CSSTransition} from 'react-transition-group';
import { ReactComponent as Github } from './Icons/Github.svg';
import { ReactComponent as LinkedIn } from './Icons/linkedin.svg';
import { ReactComponent as Caret } from './Icons/caret.svg';
import { ReactComponent as Chevron } from './Icons/chevron.svg';
import { ReactComponent as Arrow } from './Icons/arrow.svg';
import picture from './Images/photo.jpg';
import ChessGame from './Images/ChessGame.jpg';
import MyPage from './Images/MyPage.JPG';
import Blender from './Images/Blender.JPG';
import Snake from './Images/Snake.JPG';
import AWS from './Images/aws.jpg';
import Scrum from './Images/scrum.jpg'
//
//
//
import { func } from 'prop-types';

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavBarItem icon={<Github />} link="https://github.com/QuinPoley"/>
        <NavBarItem icon={<LinkedIn />} link="https://www.linkedin.com/in/quinlan-poley-85ba6816a/"/>
      </NavBar>
      <Page>
        <div className="backdrop"><div className="backtwo"></div></div>
        <About>
          <Photo></Photo>
        </About>
        <ProjectDiv>
          <ProjectComponent name="Chess" desc="A chess game in python" image={ChessGame} link="#"></ProjectComponent>
          <ProjectComponent name="AWSBlenderResources" desc="New Blender resources" image={Blender} link="#"></ProjectComponent>
          <ProjectComponent name="Snake" desc="A snake game in python" image={Snake} link="#"></ProjectComponent>
          <ProjectComponent name="Soccer Quizzes" desc="Web app using FASTAPI" link="#"></ProjectComponent>
          <ProjectComponent name="Lestrade" desc="Extension of sherlock" link="#"></ProjectComponent>
          <ProjectComponent name="HMAC Port Knock" desc="Port Knocking with stream cypher" link="#"></ProjectComponent>
          <ProjectComponent name="WebGL" desc="Website combining react and threejs" link="#"></ProjectComponent>
          <ProjectComponent name="Other" desc="Other projects" image={MyPage} link="#"></ProjectComponent>
        </ProjectDiv>
        <CertDiv>
          <CertComponent link="#" name="AWS Certified Solution Architect - Associate" desc="Issued July 2020 - Expires July 2023" image={AWS}></CertComponent>
          <CertComponent link="#" name="Certified ScrumMaster (CSM)" desc="Issued June 2021 - Expires June 2023" image={Scrum}></CertComponent>
        </CertDiv>
      </Page>
    </div>
    
  );
}
function About(props){
  return(
    <div className="aboutdiv">
      <div className="Aboutmesection">
      <div className="title">Quin Poley</div>
      <div className="aboutme"><p>Cloud, Security, and Ml</p><p>2021 B.S. Albright College - Computer Science and Biology</p><p>Software Engineer at Unisys</p></div>
      {props.children}
      </div>
    </div>
  );
}
function ProjectComponent(props){
  return(
    <a href={props.link}>
      <li className="projcomponent">
          <div className="RepoTitle">{props.name}</div>
          <img className="ProjImage" src={props.image}/>
          <div className="RepoDesc">{props.desc}</div>
      </li>
    </a>
  );
}
function ProjectDiv(props){
  return(
    <div className="projdiv">
      <Project></Project>
      <ul className="projectnav">{props.children}</ul>
    </div>
  );
}
function CertComponent(props){
  return(
    <a href={props.link}>
      <li className="certcomponent">
          <img className="CertImage" src={props.image}/>
          <div className="CertTitle">{props.name}</div>
          <div className="CertDesc">{props.desc}</div>
      </li>
    </a>
  );
}
function CertDiv(props){
  return(
    <div className="certdiv">
      <Cert></Cert>
      <ul className="certnav">{props.children}</ul>
    </div>
  );
}


function Project(){
  return (
    <div className="projheader">Projects</div>
  );
}
function Photo(){
  return(
    <img className="photo" src={picture}></img>
  );
}
function Cert(){
  return(
    <div className="certheader">Certifications</div>
  );
}
function Page(props){
  return (
    <div className="page"> 
      {props.children}
    </div>
  );
}

function DropdownMenu(){
const [activeMenu, setActiveMenu] = useState('main');
const [menuHeight, setMenuHeight] = useState(null);

function calcHeight(el){
  const height = el.offsetHeight;
  setMenuHeight(height);
}
function DropdownItem(props){
  if(props.leftIcon){
    if(props.rightIcon){
      return(
          <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </a>
      )
    }
    else{
      return(
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
        </a>
    )
    }
  }
  else{
    return(
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          {props.children}
        </a>
    )
  }
}
return(
  <div className="dropdown" style={{ height: menuHeight}}>
    <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
      <div className="menu">
        <DropdownItem>Projects</DropdownItem>
        <DropdownItem>Certifications</DropdownItem>
        <DropdownItem leftIcon="S" goToMenu="settings" rightIcon={<Chevron/>}>GoTo Settings</DropdownItem>
      </div>
    </CSSTransition>
    <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary">
      <div className="menu">
        <DropdownItem leftIcon={<Arrow/>} goToMenu="main">GoTo Main</DropdownItem>
        <DropdownItem>Settings World</DropdownItem>
      </div>
    </CSSTransition>
  </div>
)
}


function NavBarItem(props){
const [open, setOpen] = useState(false)

return(
  <li className="nav-item">
    <a href={props.link} className="icon-button" onClick={() => setOpen(!open)}>
      {props.icon}
    </a>
    {open && props.children}
  </li>
)
}

function NavBar(props){

return(
  <nav className="navbar">
    <ul className="navbar-nav">{props.children}</ul>
  </nav>
)
}

export default App;