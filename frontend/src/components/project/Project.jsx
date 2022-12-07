import React from 'react'
import ProjectModal from '../projectmodal/ProjectModal';
import "./Project.scss"
import { useState, createContext, useContext } from "react";
import { ModalContext } from "../../App.js"

export default function Project(props) {
const setContextModal = useContext(ModalContext);
  function openModal(title, img) {
 }  
  return (
    <article className='project_container' id='project_container'>
        <div className="project_right" id="aa">
          
            <img className='project_img' onClick={() => 
              setContextModal({isOpen: true, title: props.title, img: props.img, imgArray: props.imgArray})
              
              } src={props.img} alt={props.title} />
        </div>
        <div className="project_left" id='test2'>
        
            <div className="project_date">{props.date}</div>
            <div className="project_title">{props.title}</div>
            <div className="project_desc">{props.desc}</div>
        </div>

    </article>
  )
}
