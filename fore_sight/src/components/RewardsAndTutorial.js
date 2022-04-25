import React,{Component} from "react";
import '../css/RewardsAndTutorial.css'
import rankAndRewards from '../images/rankAndRewards.svg'
import YoutTubePlayer from './YouTubePlayer.js'

class RewardsAndTutorial extends Component{
    render(){
        return(
            <div>
                <div className="tutorial">
                    <p className="tutorialText">Check out our tutorial video on YouTube to learn how to play.</p>
                    <iframe className="videoTutorial"
                    src="https://www.youtube.com/embed/1dVEfs6Exkc"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    />
                </div>
            </div>
        );
    }
}

export default RewardsAndTutorial