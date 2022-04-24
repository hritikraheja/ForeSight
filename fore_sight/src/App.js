import './App.css';
import './css/NavBar.css'
import foresightLogo from "./images/foresightCircularLogo.png"
import './images/bgLight.png'
import Home from './components/Home.js';
import PlayStoreStats from './components/PlayStoreStats.js'
import Monetize from './components/Monetize.js'
import Footer from './components/Footer.js'
import TradingTopics from './components/TradingTopics.js';
import PastEvents from './components/PastEvents.js';
import ReferAFriend from './components/ReferAFriend.js';
import RewardsAndTutorial from './components/RewardsAndTutorial.js';
import { Component } from 'react';
import BlogsHome from './components/BlogsHome';
import ContactUs from './components/ContactUs';
import GettingStarted from './components/GettingStarted';
import AboutUsHome from './components/AboutUsHome';
import AboutUs from './components/AboutUs';

class App extends Component {
    
    
    constructor(props){
        super(props);

        this.state = {
            navIndex : 0,
            homeBg : <Home/>,
            bgImg : `url(${process.env.PUBLIC_URL+ "/bg.png"})`,
            content : <div> 
            <PlayStoreStats/>
            <Monetize/>
            <TradingTopics/>
            <GettingStarted/>
            <RewardsAndTutorial/>
            <PastEvents/>
            <ReferAFriend/>
            <Footer/>
            </div>
        }
    }
    render(){

        let content;

        const blogsContent = <div>
            <Footer></Footer>
            </div>

        const homeContent = <div> <PlayStoreStats/>
        <Monetize/>
        <TradingTopics/>
        <GettingStarted/>
        <RewardsAndTutorial/>
        <PastEvents/>
        <ReferAFriend/>
        <Footer/></div>

        const aboutContent = <div>
            <AboutUs></AboutUs>
            <Footer/>
        </div>

        let darkBackgroundUrl = `url(${process.env.PUBLIC_URL+ "/bg.png"})`;
        let lightBackgroundUrl = `url(${process.env.PUBLIC_URL+ "/bgLight.png"})`
        
        const blogsClicked = async() => {
            if(this.state.navIndex != 2){
                switchToDarkNav();
                content = blogsContent;
                this.setState({navIndex : 2, homeBg : <BlogsHome/>, bgImg : lightBackgroundUrl, content : blogsContent});  
            } 
        }

        const homeClicked = async()=>{
            if(this.state.navIndex != 0){
                switchToLightNav();
                this.setState({navIndex : 0, homeBg: <Home/>, bgImg : darkBackgroundUrl, content : homeContent});
            }
        }

        const contactUsClicked = async()=>{
            if(this.state.navIndex != 4){
                switchToDarkNav();
                this.setState({navIndex:4, homeBg: <ContactUs/>, bgImg:lightBackgroundUrl, content : <Footer/>})
            }
        }

        const aboutUsClicked = async() => {
            if(this.state.navIndex != 3){
                switchToDarkNav();
                this.setState({navIndex:3, homeBg: <AboutUsHome/>, bgImg:lightBackgroundUrl, content : aboutContent})
            }
        }

        const howToPlayClicked = () =>{
            if(this.state.navIndex != 0){
                switchToLightNav();
                this.setState({navIndex : 0, homeBg: <Home/>, bgImg : darkBackgroundUrl, content : homeContent});
                window.scrollTo(0, 
                    findPosition(document.getElementById("gs")))
                ;

            } else {
                window.scrollTo(0, 
                    findPosition(document.getElementById("gs")));
            }
        }

        function findPosition(obj) {
            var currenttop = 0;
            if (obj.offsetParent) {
                do {
                    currenttop += obj.offsetTop;
                } while ((obj = obj.offsetParent));
                return [currenttop];
            }
        }
        function switchToDarkNav() {
            var tabs = document.getElementsByClassName("nav-link");
            for( let i = 0; i < tabs.length; i++){
                tabs[i].style.color = "#000";
            }
            var downloadButton = document.getElementById('btn-download');
            downloadButton.style.color = "#243462";
            downloadButton.style.border = "solid 1px black";
            document.getElementById('foresightLogoTitle').style.color = "black";
            document.getElementById('toggle-btn').style.color = "black";
            document.getElementById('toggle-btn').style.border = "solid 1px black";
        }

        function switchToLightNav(){
            var tabs = document.getElementsByClassName("nav-link");
            for( let i = 0; i < tabs.length; i++){
                tabs[i].style.color = "#FFF";
            }
            var downloadButton = document.getElementById('btn-download');
            downloadButton.style.color = "#FFF";
            downloadButton.style.border = "solid 1px #FFF";
            document.getElementById('foresightLogoTitle').style.color = "#FFF";
            document.getElementById('toggle-btn').style.color = "white";
            document.getElementById('toggle-btn').style.border = "solid 1px white";
        }

        const sty = {
             backgroundImage: this.state.bgImg,
             width: '100%',
             padding: '0px',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             margin: '0px'
        }

        return (
            <div className="App container-fluid">
            <div id='top-panel' className='app' style={sty}>

            <nav class="navbar navbar-expand-md  d-flex" id="top-navigation">
                        <div className="navbar-header" style={{'width':'100%'}}>
                            <img className="navbar-brand" src={foresightLogo} href="#" id='foresightLogo' alt='LOGO'></img>
                            <p className="navbar-brand" id='foresightLogoTitle'>foresight</p>
                            <button id="toggle-btn" class="navbar-toggler btn btn-default" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="navbar-toggler-icon glyphicon glyphicon-align-justify"></i>
                                {/* <span class="navbar-toggler-icon glyphicon gyphicon-chevron-right text-dark"></span> */}
                            </button>
                        </div>
                        <div class="collapse navbar-collapse text-center" id="navbarNav">
                            <ul class="navbar-nav navbar-right" id="navigation" style={{'margin':'auto'}}>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#" id="nav-lnks" onClick={homeClicked}><b>Home</b><span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#gs" id="nav-lnks" onClick={howToPlayClicked}><b>How To Play</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="nav-lnks" onClick={blogsClicked}><b>Blogs</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="nav-lnks" onClick={aboutUsClicked}><b>About Us</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="nav-lnks" onClick={contactUsClicked}><b>Contact Us</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link m-0 pt-2" href="https://play.google.com/store/apps/details?id=com.foresight.club" target="_blank" rel="external"><button className="btn btn-default btn-download" id='btn-download'><b>Download App</b></button></a>
                                </li>
                            </ul>
                        </div>
                        
                    </nav>

                {this.state.homeBg}
            </div>
            {this.state.content}
            </div>
        );
    }
}

export default App;
