import React, {Component} from "react";
import '../css/ReferAFriend.css'
import referFriend from '../images/referFriend.svg'

class ReferAFriend extends Component{
    render(){
        return (
            <div className="referAFriendContainer">
                <div className="rDiv">
                    <div className="rText">
                        <p className="rTitle">Refer a friend and Get ₹15<br/></p>
                        <p className="rDesc">Foresight not only rewards you for predictions but, also for your referrals.<br/><br/>
                        Invite your friends and family on Foresight App, and start winning together!</p>
                    </div>
                    <div className="rImgDiv">
                        <img className="rImg" src={referFriend}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReferAFriend;