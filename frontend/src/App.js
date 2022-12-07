
import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { useState, createContext } from "react";
import ProjectModal from './components/projectmodal/ProjectModal';

 export const ModalContext = createContext()
function App() {
 // const [isOpen, setIsOpen] = React.useState(false);
  const [contextModal, setContextModal] = useState(
    { id: "",
      isOpen: false,
      title: "",
      img: "",
      imgArray: []
      
    }
  )

  
  const [navBtn, setNavBtn]= React.useState("home")
  const updateNav = (a) => {setNavBtn(a)
  
  }
  return (
    <div className="App" id='app'>
      <ModalContext.Provider value={setContextModal}>
        <Home navBtn = {navBtn} updateNav={updateNav}/>
        <Projects navBtn = {navBtn} updateNav={updateNav}/>
        <About navBtn = {navBtn} updateNav={updateNav}/>
        <Contact navBtn = {navBtn} updateNav={updateNav}/>
        {contextModal.isOpen && <ProjectModal 
        setIsOpen={contextModal.isOpen} 
        title = {contextModal.title} 
        img = {contextModal.img}
        imgArray = {contextModal.imgArray} />}

      </ModalContext.Provider>
    </div>
  );
}

export default App;
