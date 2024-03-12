import React from 'react'
import '../style/about.css'
function About() {
  console.log("About");
  return (

    <div className= "outterAboutDiv" id="aboutDiv">
            <div className="workingBlock">
                <h1 className="aboutHeaderOne">About Me</h1>
                <div className="workingFlowBlock">

                    <div className="workingFlowBlockItems">
                        <h1 className="workingFlowMiniHeader">
                            Abhinav L V 
                        </h1>
                        <p className="workingFlowPara">                        
                        Hello there! I am a Junior Software Engineer at FULL Creative, where I specialize in building web applications. As a full stack developer, I am equipped to handle both front-end and back-end applications. I am a member of the billing team and have 2.5 years of hands-on experience working with technologies such as Java, JavaScript, React, and more.
                        </p>
                    </div>
                    
                </div>

            </div>
            
        </div>
  )
}
export default About