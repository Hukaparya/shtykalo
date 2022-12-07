import React from 'react'
import "./About.scss"
import tanya1 from "../../assets/tanya1.jpg"

export const About = (props) => {

    function changeSize() {
        document.getElementById('app').style.gridTemplateColumns = '5fr 1fr'
        document.getElementById('app').style.gridTemplateRows = '1fr 5fr'
        
        document.getElementById('home_container').style.transform = "scale(0)"
        document.getElementById('logo_container').style.transform = "scale(1)"
        document.getElementById('logo_container2').style.transform = "scale(0)"
        
        document.getElementById('projects_container').style.transform = "scale(0)"
        document.getElementById('project_container').style.transform = "scale(0)"
        
        document.getElementById('contacts_container').style.transform = "scale(0)"
        document.getElementById('about_container').style.transform = "scale(1)"
        
        

        props.updateNav("about")
    }
  return (
    <div className="about about1" id='about'>
      <div className="about_container" id='about_container'>
        <div className="about_left">
          <div className="about_title">
            <h4>About Me</h4>
          </div>
          <div className="about_desc" id='about_desc'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, sed veritatis! Est sint porro nulla repudiandae hic dolor incidunt a laborum iusto voluptatem nihil fugit, aliquid doloribus laboriosam labore pariatur. Maiores, labore debitis quae iusto molestiae a tenetur quo nostrum!</p></div>
        </div>
        <div className="about_right">
          <img  src={tanya1} 
          alt="" className="about_img" />
        </div>
      </div>
       <div className="about-btn-container">
            <div className={props.navBtn === "about" ? 'main-button main-button-selected' : 'main-button' }>
                <p onClick={changeSize}>About</p>
            </div>
        </div>
    </div>
    
  )
}
