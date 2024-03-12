import React from 'react'
import '../style/contact.css'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";


function Contact() {
  console.log("Contact");
  return (
    <div className="custRev" id="containertest">
    <div className="workingBlock">
      <footer id="contact" className='containertest' >
       
        <div className='contactText'>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className='links'>
          <li className='link'>
            <a >{<MdEmail/>} Email: venkatabhinavlv@gmail.com</a>
          </li>
          <li className='link'>
            {/* <img
              // src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            /> */}
            <a href="https://www.linkedin.com/in/abhinav-l-v-097850192/">{<FaLinkedin />
} https://www.linkedin.com/in/abhinav-l-v-097850192/</a>
          </li>
          <li className='link'>
            {/* <img
              // src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            /> */}
            <a href="https://github.com/AbhinavVenkat?tab=repositories">{<FaGithubSquare />
} https://github.com/AbhinavVenkat?tab=repositories</a>
          </li>
        </ul>
        
      </footer> 
      </div>
      </div>
  )
}
export default Contact