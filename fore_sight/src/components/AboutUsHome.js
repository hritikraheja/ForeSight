import React,{Component} from "react";
import '../css/AboutUsHome.css'

class AboutUsHome extends Component{
    render(){
        return(
            <div className="container-fluid" id="aboutUsContainer">
                <p id="aboutUsHead">About Us</p>
                <p id="aboutUsSubHead">When your opinion matched the facts, you should<br/>
                get rewarded for that. We at Foresight make sure<br/>
                that happens consistently and thoroughly.</p>
                <p id="aboutUsQuote"><q>While predictions matter, truth matters more.</q></p>
            </div>
        );
    }
}

export default AboutUsHome;