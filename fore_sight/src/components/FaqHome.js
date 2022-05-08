import React,{Component} from "react";
import "../css/FaqHome.css";

class FaqHome extends Component{
    render(){
        return(
            <div className="container-fluid" id="faqsHome">
                <h1 id="faqsHead">Frequently Asked Questions</h1>
                <p id="faqsSubHead">Need Help? Find the topic you are looking for...</p>
                <div class="faqInputGroup">
                            <i class="glyphicon glyphicon-search text-dark faqSearchIcon"></i>
                            <input type="text" class="form-control" id= "faqSearchInput" autoComplete="off" placeholder="Ask a question..."/>
                            <a href="#faqs"><button class="btn btn-default text-light" type="submit" id="faqSearchButton">SEARCH</button></a>
                </div>
            </div>
        );
    }
}
export default FaqHome;