import React from 'react'
import "./Projects.scss"
import "../../index.css"
import auction1 from "../../assets/auction1.jpg"
import designweek from "../../assets/designweek.jpg"
import insomnia from "../../assets/insomnia.jpg"
import objecats1 from "../../assets/objecats1.jpg"
import pragovka1 from "../../assets/pragovka1.jpg"
import pragovka2 from "../../assets/pragovka2.jpg"
import Project from "../project/Project"


export const Projects = (props) => {
    function changeSize() {
         document.getElementById('app').style.gridTemplateColumns = '1fr 5fr'
         document.getElementById('app').style.gridTemplateRows = '5fr 1fr'

         document.getElementById('home_container').style.transform = "scale(0)"
         document.getElementById('logo_container').style.transform = "scale(0)"
         document.getElementById('logo_container2').style.transform = "scale(1)"
         
         
         document.getElementById('projects_container').style.transform = "scale(1)"
         document.getElementById('projects_container').style.overflow = "scroll"
         document.getElementById('contacts_container').style.transform = "scale(0)"
         document.getElementById('about_container').style.transform = "scale(0)"
        
        props.updateNav("projects")
    }

    
    const projectsArr = [
        {   id: 1, 
            date: "Sep. 22", 
            title: "OVOID Project", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, esse!", 
            img: "../../assets/auction1.jpg",
            imgArray: [
                "../../assets/objecats1.jpg", 
                "../../assets/objecats2.jpg", 
                "../../assets/objecats3.jpg"
              ]
        },
        {   id: 2, 
            date: "Sep. 22", 
            title: "Vienna Design Week", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, esse!", 
            img: "../../assets/designweek.jpg",
            imgArray: [
                "../../assets/objecats1.jpg", 
                "../../assets/objecats2.jpg", 
                "../../assets/objecats3.jpg"
              ]
        },
        {   id: 3, 
            date: "Nov. 22", 
            title: "Insomnia Project", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, esse!", 
            img: "../../assets/insomnia.jpg",
            imgArray: [
                "../../assets/objecats1.jpg", 
                "../../assets/objecats2.jpg", 
                "../../assets/objecats3.jpg"
              ]
        },
        {   id: 4, 
            date: "Jul. 22", 
            title: "OBJECATS Project", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, esse!", 
            img: "../../assets/objecats1.jpg",
            imgArray: [
                "../../assets/objecats1.jpg", 
                "../../assets/objecats2.jpg", 
                "../../assets/objecats3.jpg"
              ]
        },
        {   id: 5, 
            date: "Oct. 22", 
            title: "Red Kalina Project", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, esse!", 
            img: "../../assets/pragovka1.jpg",
            imgArray: [
                "../../assets/objecats1.jpg", 
                "../../assets/objecats2.jpg", 
                "../../assets/objecats3.jpg"
              ]
        },
        {   id: 6, 
            date: "Oct. 22", 
            title: "Shypshyna Project", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, esse!", 
            img: "../../assets/pragovka2.jpg",
            imgArray: [
                "../../assets/objecats1.jpg", 
                "../../assets/objecats2.jpg", 
                "../../assets/objecats3.jpg"
              ]
        }
    ]
    
  return (
    <div className="projects" id='projects'>
        <div className="logo_container2" id='logo_container2'>
            <h2 className='logo2' id='logo2'>TANYA SHTYKALO</h2>
        </div>
        <div className="projects_container" id='projects_container'>

          
            {projectsArr.map(p => (
                <Project 
                key = {p.id}
                date = {p.date} 
                title={p.title} 
                desc={p.desc} 
                img = {p.img}
                imgArray = {p.imgArray}
                />

            ))  }
        </div>
            <div className="projects-btn-container">
                 <div className=
                    {props.navBtn === "projects" ? 'main-button main-button-selected' : 'main-button' }>
                <p onClick={changeSize}>Projects</p></div>
            </div>
    </div>
       
    
  )
}
