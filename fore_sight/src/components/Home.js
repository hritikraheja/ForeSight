import React,{Component} from "react";
import '../css/Home.css'
import ss1 from '../images/ss1.svg'

class Home extends Component{
    render(){
        return(
            <div className="container-fluid" id="hContainer">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4" id="column">
                        <span id="head">Opinion<br/>Hai?</span><br/>
                    </div>
                    <div className="colo-md-4 col-lg-4 col-sm-4">
                        <img src = {ss1} id="ss1"></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4" id="column">
                        <span id="headB">Trade<br/>Karo</span><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;