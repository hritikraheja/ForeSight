import React, {Component} from "react";
import '../css/GettingStarted.css'
import ss1 from '../images/ss1.svg'
import ss2 from '../images/ss1.svg'
import ss3 from '../images/ss1.svg'
import ss4 from '../images/ss1.svg'
import ss5 from '../images/rankAndRewards.svg'
import num1 from '../images/num1.png'
import num2 from '../images/num2.png'
import num3 from '../images/num3.png'
import num4 from '../images/num4.png'
import num5 from '../images/num5.png'
import num1Mob from '../images/num1Mob.png'
import num2Mob from '../images/num2Mob.png'
import num3Mob from '../images/num3Mob.png'
import num4Mob from '../images/num4Mob.png'
import num5Mob from '../images/num5Mob.png'


class GettingStarted extends Component{
    render(){
        return(
        <div className="gs" id="gs">
            <p className="gsHead">Getting started with Foresight App</p>

            <div id="steps">
                <div id="step">
                    <img id="stepSSRight" src={ss1}></img>
                    <img id="stepDesc" src={num1}></img>
                </div>
                <div id="step">
                    <img id="stepDesc" src={num2}></img>
                    <img id="stepSSLeft" src={ss2}></img>
                </div>
                <div id="step">
                    <img id="stepSSRight" src={ss3}></img>
                    <img id="stepDesc" src={num3}></img>
                </div>
                <div id="step">
                    <img id="stepDesc" src={num4}></img>
                    <img id="stepSSLeft" src={ss4}></img>
                </div>
                <div id="step">
                    <img id="ranks" src={ss5}></img>
                    <img id="rankDesc" src={num5}></img>
                </div>
            </div>

            <div id="stepsMob">
                <div id="stepMob">
                    <img id="stepDescMob" src={num1Mob}></img>
                    <img id="stepSSMob" src={ss1}></img>
                </div>
                <div id="stepMob">
                    <img id="stepDescMob" src={num2Mob}></img>
                    <img id="stepSSMob" src={ss2}></img>
                </div>
                <div id="stepMob">
                <img id="stepDescMob" src={num3Mob}></img>
                    <img id="stepSSMob" src={ss3}></img>
                </div>
                <div id="stepMob">
                    <img id="stepDescMob" src={num4Mob}></img>
                    <img id="stepSSMob" src={ss4}></img>
                </div>
                <div id="stepMob">
                    <img id="stepDescMob" src={num5Mob}></img>
                    <img id="stepSSMob" src={ss5}></img>
                </div>
            </div>

        </div>
        );
    }
}

export default GettingStarted;