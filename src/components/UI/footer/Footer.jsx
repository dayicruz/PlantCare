
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";


import { AiFillPhone } from "@react-icons/all-files/ai/AiFillPhone";
import { FaRegCopyright } from "@react-icons/all-files/fa/FaRegCopyright";
import { ImLocation2 } from "@react-icons/all-files/im/ImLocation2";
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail";

import React, { useRef } from 'react';
import LogoPlantCare from '../../../assets/images/plantCare logo.png';



import emailjs from '@emailjs/browser';

import { NavLink } from "react-router-dom";
import './footer.scss';

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9k9cl6l', 'template_82k91tg', form.current, 'HWw_8wwno3q3sYZDx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <footer className="section">
      
         <img className="footer-logo" src={LogoPlantCare} alt="image logo" />
      
     

    <div className="footer">

      <div className="footer-flex">

        <div className="footer-flex--contact">

          <div className="footer-flex--contact---icons">

            <p className="footer-flex--contact---icons----icon">< AiFillPhone/></p>
            <p className="footer-flex--contact---icons----text">604248563</p> 

          </div>
      </div>
           <div className="footer-flex--contact---icons">

            <p className="footer-flex--contact---icons----icon"><IoMdMail/></p>
            <p className="footer-flex--contact---icons----text">dayicruz1401@gmail.com</p> 

          </div>

          <div className="footer-flex--contact---icons">

            <p className="footer-flex--contact---icons----icon"><ImLocation2 /></p>
            <p className="footer-flex--contact---icons----text">Benalmadena, Malaga</p> 

          </div> 

        </div>

        <div className="footer-flex--redes">

          <NavLink to={"https://www.facebook.com/"} className="footer-flex--redes---icon"><AiFillFacebook/></NavLink>
          <NavLink to={"https://www.instagram.com/"} className="footer-flex--redes---icon"><AiFillInstagram/></NavLink>
          <NavLink to="#"onClick={(e) => {
                  window.location.href = 'whatsapp://send?dayana=+34 604 248 563';
                  e.preventDefault();
                }} className="footer-flex--redes---icon"><FaWhatsappSquare/></NavLink>
          <NavLink to={"https://www.linkedin.com/in/dayana-cruz-gonzalez/"} className="footer-flex--redes---icon"><FaLinkedin/></NavLink>
              
        </div>

        <div className="footer-flex--links">

        <div>
            <NavLink
                  to="/home"
                  className={ "footer-flex--links---navLink"
                  }>
                  Home
              </NavLink>
          </div>

          <div>
            <NavLink
                  to="/categories"
                  className={"footer-flex--links---navLink"
                  }>
                  Categories
              </NavLink>
          </div>
           
          <div>
          <NavLink
                to="/search"
                className={ "footer-flex--links---navLink"
                }>
                Search
            </NavLink>
          </div>

          <div>
          <NavLink
                to="countries"
                className={/* ({ isActive, isPending }) =>
                  isPending ? "pending" : isActive  ?"active" :*/  "footer-flex--links---navLink"
                }>
                Countries
            </NavLink>
          </div>
        </div >

        <div className="footer-form">
            <form className="field" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea className="textarea" name="message" />
              <input type="submit" value="Send" />
          </form>
        </div>
  
        </div>
      <div className="CopyRigth">
        <p><FaRegCopyright/></p>
        <p>Dayana Cruz 2023</p>
      </div>
    </footer>
  )
}

export default Footer