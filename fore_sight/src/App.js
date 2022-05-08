import './App.css';
import './css/NavBar.css'
import foresightLogo from "./images/foresightCircularLogo.png"
import './images/bgLight.png'
import './css/Footer.css'
import Home from './components/Home.js';
import PlayStoreStats from './components/PlayStoreStats.js'
import Monetize from './components/Monetize.js'
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
import playStoreImage from "./images/getItOnPlayStore.svg"
import hyptoLogo from "./images/hypto.svg"
import FaqHome from './components/FaqHome';
import Faqs from './components/Faqs';

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
            </div>
        }
    }
    render(){

        let content;

        const blogsContent = <div>
            </div>

        const homeContent = <div> <PlayStoreStats/>
        <Monetize/>
        <TradingTopics/>
        <GettingStarted/>
        <RewardsAndTutorial/>
        <PastEvents/>
        <ReferAFriend/></div>

        const aboutContent = <div>
            <AboutUs></AboutUs>
        </div>

        const faqContent = <div>
            <Faqs></Faqs>
        </div>

        let darkBackgroundUrl = `url(${process.env.PUBLIC_URL+ "/bg.png"})`;
        let lightBackgroundUrl = `url(${process.env.PUBLIC_URL+ "/bgLight.png"})`
        
        const blogsClicked = async() => {
            if(this.state.navIndex != 2){
                switchToDarkNav();
                content = blogsContent;
                this.setState({navIndex : 2, homeBg : <BlogsHome/>, bgImg : lightBackgroundUrl, content : blogsContent});  
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(" active", "");
                document.getElementsByClassName('nav-item')[2].className += " active";
            } 
            collapseNavBar();
        }

        const homeClicked = async()=>{
            if(this.state.navIndex != 0){
                switchToLightNav();
                this.setState({navIndex : 0, homeBg: <Home/>, bgImg : darkBackgroundUrl, content : homeContent});
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(" active", "");
                document.getElementsByClassName('nav-item')[0].className += " active";
            }
            collapseNavBar();
        }

        const contactUsClicked = async()=>{
            if(this.state.navIndex != 4){
                switchToDarkNav();
                this.setState({navIndex:4, homeBg: <ContactUs/>, bgImg:lightBackgroundUrl, content : <div></div>})
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(" active", "");
                document.getElementsByClassName('nav-item')[4].className += " active";
            }
            collapseNavBar();
        }

        const aboutUsClicked = async() => {
            if(this.state.navIndex != 3){
                switchToDarkNav();
                this.setState({navIndex:3, homeBg: <AboutUsHome/>, bgImg:lightBackgroundUrl, content : aboutContent})
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(" active", "");
                document.getElementsByClassName('nav-item')[3].className += " active";
            }
            collapseNavBar();
        }

        const howToPlayClicked = () =>{
            if(this.state.navIndex != 0){
                switchToLightNav();
                this.setState({navIndex : 0, homeBg: <Home/>, bgImg : darkBackgroundUrl, content : homeContent});
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(" active", "");
                document.getElementsByClassName('nav-item')[0].className += " active";
                window.scrollTo(0, 
                    findPosition(document.getElementById("gs")))
                ;
            } else {
                window.scrollTo(0, 
                    findPosition(document.getElementById("gs")));
            }
            collapseNavBar();
        }

        const faqClicked = () => {
            if(this.state.navIndex != 5){
                switchToDarkNav();
                this.setState({navIndex:5, homeBg: <FaqHome/>, bgImg:lightBackgroundUrl, content : faqContent});
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(" active", "");
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

        function collapseNavBar(){
            var btn = document.getElementById('toggle-btn');
            var b = document.getElementById('navbarNav');
            b.ariaExpanded = false;
            btn.ariaExpanded = false;
            btn.className += " collapsed";
            b.className = b.className.replace(" in", "");
            // console.log(btn.classList);
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
            <footer class="text-center text-lg-start bg-dark">
 
            <div class="container p-0" id="footer">
                
                <div class="row" style={{'width':'100%'}}>
                
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 container" id="footer-section-1">
                    <div className="container-fluid mt-0" id="logo-and-brand">
                        <img src={foresightLogo} id='footer-logo'></img>
                        <span className="text-light mt-0 lg" id="footer-brand"><b>foresight</b></span>
                    </div>
                    <p id="footer-download-text">Download the Foresight app on Google Playstore.</p>
                    <img id ='footer-logo-2' src={playStoreImage}></img>
                    <span className="text-light" id="fSubTitle">Payment Partner-</span>
                    <img id = 'footer-logo-3' src={hyptoLogo}></img>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0" id="footer-section">
                    <h5 class="mb-4 text-light lead" id="footer-head"><b>Sections</b></h5>

                    <ul class="list-unstyled lg">
                    <li>
                        <a href="#" class="text-light" onClick={homeClicked} id="footer-lnk">Home</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={howToPlayClicked} id="footer-lnk">How To Play</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={blogsClicked} id="footer-lnk">Blogs</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={faqClicked} id="footer-lnk">FAQs</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={aboutUsClicked} id="footer-lnk">About Us</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={contactUsClicked} id="footer-lnk">Contact Us</a>
                    </li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0" id="footer-section">
                    <h5 class=" mb-4 text-light lead" id="footer-head"><b>Social Media</b></h5>

                    <ul class="list-unstyled lg">
                    <li>
                        <a href="https://www.facebook.com/foresightIN" target='_blank' class="text-light" id="footer-lnk">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/foresight_in/" target='_blank' class="text-light" id="footer-lnk">Instagram</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light" target='_blank' id="footer-lnk">Twitter</a>
                    </li>
                    <li>
                        <a href="https://medium.com/forecight" class="text-light" target='_blank' id="footer-lnk">Medium</a>
                    </li>
                    <li>
                        <a href="https://t.me/forecight" class="text-light" target='_blank' id="footer-lnk">Telegram</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/rajagharka" class="text-light" target='_blank' id="footer-lnk">Youtube</a>
                    </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0" id="footer-content-4">
                    <h5 className="mb-3 text-light lead" id="footer-head"><b>Subscribe our Weekly Newsletter</b></h5>
                    <form id="footer-form" class="navbar-form navbar-left p-0">
                        <div class="input-group ml-0">
                            <input id="footer-input" autoComplete="off" type="text" class="form-control" placeholder="Your Email" style={{'height':'50px'}}/>
                            <div class="input-group-btn">
                            <button class="btn btn-default" type="submit" style={{'backgroundColor':'orange', 'height':'50px'}}>
                                <i class="glyphicon glyphicon-chevron-right text-light"></i>
                            </button>
                            </div>
                        </div>
                    </form>

                    <p className="text-light my-10 mt-5">
                        <b>Address</b>-325/K<br/>G Block, Kumari<br/>Rameshpur 631001
                    </p>

                    <p className="text-light my-10">
                        <b>Email-</b>rahula@foresight.mobi
                    </p>
                </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-4" style={{'marginTop':'50px'}}>
                    <div className="col-lg-6 mb-3">
                        <span className="text-light"><i className="glyphicon glyphicon-copyright-mark"/> Sageskills Pvt Ltd. All rights are reserved</span>
                    </div>
                    <div className="col-lg-6">
                        <div style={{'display':'inline-flex'}}>
                            <p className="mb-2" id ="footer-lnk">Terms & Conditions</p>
                            <p className="text-light mx-4">|</p>
                            <p className="mb-2" id="footer-lnk">Privacy Policy</p>
                            <p className="text-light mx-4">|</p>
                            <p className="mb-2" id="footer-lnk">Cancellation & Refund Policy</p>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
            </div>
        );
    }
}

export default App;
