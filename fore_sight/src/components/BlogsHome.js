import React, { Component } from "react";
import '../css/BlogsHome.css'
class BlogsHome extends Component{

    render(){
        return(
            <div className="container-fluid" id="blogsHome">
                <h1 id="blogsHead">Blogs</h1>
                <p id="blogsSubHead">Get up to date with the latest blogs posted daily</p>
                <div class="inputGroup">
                            <i class="glyphicon glyphicon-search text-dark searchIcon"></i>
                            <input type="text" class="form-control" id= "searchInput" autoComplete="off" placeholder="Find an article..."/>
                            <a href="#yetToComePrompt"><button class="btn btn-default text-light" type="submit" id="searchButton">SEARCH</button></a>
                </div>

                <p id='yetToComePrompt'>This section is yet to be made.</p>
            </div>
        );
    }
}

export default BlogsHome