import React,{Component} from "react";
import missionImg from '../images/missionImg.png' 
import missionText from '../images/missionText.png'
import '../css/AboutUs.css'
import iconPerson from '../images/iconPerson.png'
import learnMorePreview from '../images/learnMorePreview.png'

class AboutUs extends Component{
    render(){

        const showDetails= async() =>{
            document.getElementById('preview').style.display = 'block';
        }

        const hideDetails = async()=>{
            document.getElementById('preview').style.display = 'none';
        }

        const backgroundImageUrl = `url(${process.env.PUBLIC_URL+ "/tradingTopicsBackground.png"})`;
        const missionStyle = {
            backgroundImage: backgroundImageUrl,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
       }

        return(
            <div>
                <div id="missionDiv" style={missionStyle}>
                    <img src={missionText} id="missionDesc"/>
                    <img src={missionImg} id="missionImgs"/>
                </div>

                <div id="teamMembersDiv">
                    <p id="tmHead">Meet the Team</p>
                    <p id="tmSubHead">Meet the dedicated team behind Foresight.</p>
                    <div id="tm">
                        <div id="member">
                            <img id="memberImg" src={iconPerson}></img>
                            <button id="memberDetailsButton" onClick = {showDetails}><i className="glyphicon glyphicon-chevron-right" id="learnMoreIcon"></i></button>
                            <p id="memberName">Anders Carlius</p>
                            <p id="memberDesignation">Co-Founder and CEO</p>
                            <div id="memberLinks">
                                <i id="memberIcon" className="fa-brands fa-linkedin-in"></i>
                                <i id="memberIcon" class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                        <div id="member">
                            <img id="memberImg" src={iconPerson}></img>
                            <button id="memberDetailsButton" onClick = {showDetails}><i className="glyphicon glyphicon-chevron-right" id="learnMoreIcon"></i></button>
                            <p id="memberName">Rahula Raj</p>
                            <p id="memberDesignation">Co-Founder and CEO</p>
                            <div id="memberLinks">
                                <i id="memberIcon" className="fa-brands fa-linkedin-in"></i>
                                <i id="memberIcon" class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div id="tm">
                    <div id="member">
                            <img id="memberImg" src={iconPerson}></img>
                            <button id="memberDetailsButton" onClick = {showDetails}><i className="glyphicon glyphicon-chevron-right" id="learnMoreIcon"></i></button>
                            <p id="memberName">Sumit Mittal</p>
                            <p id="memberDesignation">Social Media Manager</p>
                            <div id="memberLinks">
                                <i id="memberIcon" className="fa-brands fa-linkedin-in"></i>
                                <i id="memberIcon" class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                        <div id="member">
                            <img id="memberImg" src={iconPerson}></img>
                            <button id="memberDetailsButton" onClick = {showDetails}><i className="glyphicon glyphicon-chevron-right" id="learnMoreIcon"></i></button>
                            <p id="memberName">Manjeet Singh</p>
                            <p id="memberDesignation">Content Writing Head</p>
                            <div id="memberLinks">
                                <i id="memberIcon" className="fa-brands fa-linkedin-in"></i>
                                <i id="memberIcon" class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                        <div id="member">
                            <img id="memberImg" src={iconPerson}></img>
                            <button id="memberDetailsButton" onClick = {showDetails}><i className="glyphicon glyphicon-chevron-right" id="learnMoreIcon"></i></button>
                            <p id="memberName">Nitesh Padghan</p>
                            <p id="memberDesignation">Content Writing Head</p>
                            <div id="memberLinks">
                                <i id="memberIcon" className="fa-brands fa-linkedin-in"></i>
                                <i id="memberIcon" class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <dialog id="preview" open>
                    <button id="preview_close_button" onClick={hideDetails}>
                        X
                    </button>
                    <img src={learnMorePreview} id="preview_img" />
                </dialog>
            </div>
        );
    }
}

export default AboutUs;