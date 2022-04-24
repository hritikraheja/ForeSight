import React, {Component} from "react";
import '../css/ContactUs.css'
import emailjs from 'emailjs-com'

class ContactUs extends Component{
    render(){
        const sendEmail = (e)=>{
            emailjs.send()
        }
        return (
            <div className="container-fluid" id="contactContainer">
                    <div id="contactLeftContainer">
                        <p id="contactHead">Contact Us</p>
                        <p id="contactSubHead">Feel free to contact us any time. We will get back to you as soon as we can!</p>
                        <input type='text' placeholder="Name" id="nameInput" className="contactInput"></input>
                        <input type='text' placeholder="Email" id="emailInput" className="contactInput"></input>
                        <input type='text' placeholder="Message" id="messageInput" autoComplete="off" className="contactInput"></input>
                        <button id="sendButton">SEND</button>
                    </div>
                    <div id="contactRightContainer">
                        <div id="smallBox"></div>
                        <div id="contactDetailsContainer">
                            <p id="cHead">Info</p>
                            <p id="cDetail"><i id="dIcon" className="glyphicon glyphicon-envelope"></i>rahula@foresight.mobi</p>
                            <p id="cDetail"><i id="dIcon" className="glyphicon glyphicon-time"></i>9:00 - 18:00 (Monday to Friday)</p>
                            <p id="cDetail"><i id="dIcon" className="glyphicon glyphicon-map-marker"></i>H.No - 325/K, G-Block Kumari, Rameshwarpur, India 631001</p>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default ContactUs