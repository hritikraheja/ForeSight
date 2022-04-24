import React,{Component} from "react";
import '../css/Monetize.css'
import tradeLogo from '../images/tradeLogo.svg'
import earnLogo from '../images/earnLogo.svg'
import analyseLogo from '../images/analyseLogo.svg'

class Monetize extends Component{
    render(){
        return (
            <div>
                <p id="m-head"><b>Monetize Your Opinions</b></p>

                <div id="m-body">
                    <div id="m-box">
                        <img id="m-image" src={analyseLogo}></img>
                        <p id="m-title">Analyse</p>
                        <p id="m-desc">Formulate the best predictions backed by research and intuition.</p>
                    </div>
                    <div id="m-box">
                        <img id="m-image" src={tradeLogo}></img>
                        <p id="m-title">Trade</p>
                        <p id="m-desc">Don't just keep your predictions to yourself. Share it on Foresight.</p>
                    </div>
                    <div id="m-box">
                        <img id="m-image" src={earnLogo}></img>
                        <p id="m-title">Earn</p>
                        <p id="m-desc">Reward is what separates facts from fiction. Get the facts and start winning.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Monetize;