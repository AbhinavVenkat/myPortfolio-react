import "../style/skill.css";
import React from 'react';

function Skills(props) {
    return (
        <div className="custRev" id="skillsDiv">
          <div className="workingBlock">
            <h1> SKILLS </h1>
            {/* <div className = "reviewBlockFull"> */}
                <div className="custReviewBlock">
                    <div className="reviewList">
                        <div id="listItem1" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • Core Java
                            </blockquote>
                        </div>
                        <div id="listItem1" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • Javascript
                            </blockquote>
                        </div>
                        <div id="listItem2" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • React
                            </blockquote>
                        </div>
                        <div id="listItem3" className="listItem">
                            <blockquote className="blockQuoteClass">
                             • Spring Boot
                            </blockquote>
                        </div>
                        <div id="listItem4" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • Spring MVC
                            </blockquote>
                        </div>
                        <div id="listItem1" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • Spring JPA
                            </blockquote>
                        </div>
                        <div id="listItem1" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • Rest API
                            </blockquote>
                        </div>
                        <div id="listItem1" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • JSP
                            </blockquote>
                        </div>
                        <div id="listItem1" className="listItem">
                            <blockquote className="blockQuoteClass">
                            • Redux
                            </blockquote>
                        </div>
                       
                       
                        
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Skills;