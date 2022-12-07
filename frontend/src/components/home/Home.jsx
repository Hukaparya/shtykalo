import React from 'react'
import "./Home.scss"
import "../../index.css"

export const Home = (props) => {

    function changeSize() {
        document.getElementById('app').style.gridTemplateColumns = '5fr 1fr'
        document.getElementById('app').style.gridTemplateRows = '5fr 1fr'
        
        document.getElementById('home_container').style.transform = "scale(1)"
        document.getElementById('logo_container').style.transform = "scale(0)"
        document.getElementById('logo_container2').style.transform = "scale(0)"
        
        document.getElementById('projects_container').style.transform = "scale(0)"
        document.getElementById('project_container').style.transform = "scale(0)"
        
        document.getElementById('contacts_container').style.transform = "scale(0)"
        document.getElementById('about_container').style.transform = "scale(0)"
        
        

        
        // document.getElementById('logo_container').style.display = "flex"
        props.updateNav("home")
    }
  return (
    <div className="home" id='home'>
        <div className="logo_container" id='logo_container'>
            <h2 className='logo' id='logo'>TANYA SHTYKALO</h2>
        </div> 
        
        <div className="home_container" id='home_container'>
            <div className="hello1" id='hello1'>
                <p>Hello! I'm</p> 
                <p className='logo_big' id='logo_big'>TANYA SHTYKALO</p>
                <h4> Artist, Sculptor</h4>
                <p>from Odessa, Ukraine</p>
            </div>
        </div> 
        
        <div className="home-btn-container">
            <div className={props.navBtn === "home" ? 'main-button main-button-selected' : 'main-button' }>
                <p onClick={changeSize}>Home</p>
            </div>
        </div>
        
    </div>
    
  )
}
