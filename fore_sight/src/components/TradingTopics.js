import React,{Component} from "react";
import '../css/TradingTopics.css'
import stocksIcon from '../images/stocksIcon.svg'
import cryptoIcon from '../images/cryptoIcon.svg'
import cricketIcon from '../images/cricketIcon.svg'
import bollywoodIcon from '../images/bollywoodIcon.svg'
import trendingIcon from '../images/trendingIcon.svg'

class TradingTopics extends Component{
    render(){
        return(
            <div className="container-fluid tContainer">
                <h2 className="text-center text-light tHead" id="tHead">Multiple topics to trade on</h2>
                <div className="allTopics">
                    <div className="tTopic">
                        <img className="tImg" src={stocksIcon}></img>
                        <span className="tTitle">Stocks</span>
                    </div>
                    <div className="tTopic">
                        <img className="tImg" src={cryptoIcon}></img>
                        <span className="tTitle">Cryptos</span>
                    </div>
                    <div className="tTopic">
                        <img className="tImg" src={cricketIcon}></img>
                        <span className="tTitle">Cricket</span>
                    </div>
                    <div className="tTopic">
                        <img className="tImg" src={bollywoodIcon}></img>
                        <span className="tTitle">Bollywood</span>
                    </div>
                    <div className="tTopic">
                        <img className="tImg" src={trendingIcon}></img>
                        <span className="tTitle">Trending</span>
                    </div>
                </div>
            </div>
        );
    }
} 

export default TradingTopics;