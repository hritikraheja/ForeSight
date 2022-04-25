import React,{Component} from "react";
import foresightLogo from "../images/foresightCircularLogo.png"
import playStoreImage from "../images/getItOnPlayStore.svg"
import hyptoLogo from "../images/hypto.svg"
import '../css/Footer.css'

class Footer extends Component{
    render(){
        return (
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
                        <a href="#" class="text-light" onClick={this.props.fun0} id="footer-lnk">Home</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={this.props.fun1} id="footer-lnk">How To Play</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={this.props.fun2} id="footer-lnk">Blogs</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={this.props.fun0} id="footer-lnk">FAQs</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={this.props.fun3} id="footer-lnk">About Us</a>
                    </li>
                    <li>
                        <a href="#" class="text-light" onClick={this.props.fun4} id="footer-lnk">Contact Us</a>
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
        );
    }
}

export default Footer