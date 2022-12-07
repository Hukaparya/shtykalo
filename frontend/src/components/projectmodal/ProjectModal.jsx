import React, { useRef, useState } from "react";
import "./ProjectModal.scss"
//import styles from "./ProjectModal.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { ModalContext } from "../../App.js"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {createContext, useContext } from "react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectModal(props) {
    const setContextModal = useContext(ModalContext);
   
   const aaa = props.imgArray
  
  return (
    
    <>
    <div className="darkBG" onClick={() => setContextModal({isOpen: false, title: "", img: "props.img"})}/>
    <div className="centered">
      <div className="modal">
        <div className="modalHeader">
          <h5 className="heading"> {props.title}</h5>
          {aaa.map(img1 =>{ 
               return <p>{img1}</p> 
                    })}  
        </div>
        <button className="closeBtn" onClick={() => setContextModal({isOpen: false, title: "", img: "props.img"})}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
                {/* <div className={styles.modalContent}> */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                   {aaa.map ((img1) =>{ 
                  return <SwiperSlide >
                  <img className="swiperslideimg" src={img1} alt="" />
                  </SwiperSlide> 
                  
                   })}  


                </Swiper>
             
       
           
            {/* <div className={styles.modalImgContainer}>
                <img className={styles.modalImg}src={props.img} alt="" />
            </div> */}

        </div>
      </div>
    
  </>
  )
}
