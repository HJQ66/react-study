import React,{Component} from "react";

import "./index.css"
export default class Search extends Component{
    onSearch = ()=>{
        
    }
    render(){
        return(
            <div className="search_box">
                <div className="content_box">
                    <h4>请输入你要搜索的内容</h4>
                    <input type="text" />
                    <button onClick={this.onSearch}>搜索</button>
                </div>
            </div>
        )
    }
}