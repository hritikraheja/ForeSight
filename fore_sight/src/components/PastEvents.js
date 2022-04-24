import React, {Component} from "react";
import '../css/pastEvents.css';
import pastEvent1 from '../images/pastEvents1.svg'
import pastEvent2 from '../images/pastEvents2.svg'
import pastEvent3 from '../images/pastEvent3.svg'
import crypto11 from '../images/rankAndRewards.svg'

class PastEvents extends Component{
    render(){
        return(
            <div className="container-fluid p-0">
                <div className="pastEventsContainer">
                    <span className="peHead">Past Events on Foresight App<br/></span>
                    <span className="peSubHead">Wisdom of Crowd v/s Actual Results<br/></span>
                    <div className="pastEvents">
                        <div className="pe"><img className="peImg" src={pastEvent1}></img></div>
                        <div className="pe"><img className="peImg" src={pastEvent2}></img></div>
                        <div className="pe"><img className="peImg" src={pastEvent3}></img></div>
                    </div>
                </div>
                <div className="cryptoDiv">
                    <div className="cryptoText">
                        <p className="cryptoTitle">Cryto 11<br/></p>
                        <p className="cryptoDesc">Foresight has something unique for cryto enthusiasts! 
                        If you have a knack for Crypto Currencies like Bitcoin, you can easily place your bids on cryto 11.<br/><br/>
                        Predict the fluctuations in the digital currency and win instant rewards! It will help you ace the 
                        leaderboard and emerge as the ultimate winner in case of a tie-breaaker.</p>
                    </div>
                    <div className="crytpoImgDiv">
                        <img className="cryptoImg" src={crypto11}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default PastEvents;