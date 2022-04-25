import React,{Component} from "react";
import '../css/PlayStoreStats.css'
import activeUsersIcon from '../images/activeUsersIcon.svg'
import winAmountIcon from '../images/winAmount.svg'
import ratingsIcon from '../images/ratingsIcon.svg'
import downloadsIcon from '../images/downloads.svg'

class PlayStoreStats extends Component{
    render(){
        return(
            <div className="container" id="sContainer">
                <div className="stats">
                        <div className="stat">
                            <img className="statLogo" src={activeUsersIcon}></img>
                            <div className="statText">
                                <p className="statTitle">1600</p>
                                <p className="statDescription">ACTIVE USERS</p>
                            </div>
                    </div> 
                    <div className="stat">
                            <img className="statLogo" src={winAmountIcon}></img>
                            <div className="statText">
                                <p className="statTitle">1 Lakh</p>
                                <p className="statDescription">WON BY USERS</p>
                            </div>
                    </div>
                    <div className="stat">
                            <img className="statLogo" src={ratingsIcon}></img>
                            <div className="statText">
                                <p className="statTitle">4.9</p>
                                <p className="statDescription">RATED BY USERS</p>
                            </div>
                    </div> 
                    <div className="stat">
                            <img className="statLogo" src={downloadsIcon}></img>
                            <div className="statText">
                                <p className="statTitle">5000</p>
                                <p className="statDescription">DOWNLOADS</p>
                            </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default PlayStoreStats;