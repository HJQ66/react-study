import React,{Component} from "react";

import "./index.css"
import axios from "axios";
export default class Search extends Component{
    onSearch = ()=>{
        let val = this.ipt.value
        this.props.updateState({isLoading:true,isStart:false})
        axios.get(`http://localhost:3000/api/search/users?q=${val}`).then((res)=>{
            this.props.updateState({isLoading:false,userList : res.data.items})
        },err=>{
            this.props.updateState({isLoading:false,err :err.message})
        })

    }
    render(){
        return(
            <div className="search_box">
                <div className="content_box">
                    <h4>请输入你要搜索的内容</h4>
                    <input type="text" ref={(c)=>this.ipt = c}/>
                    <button onClick={this.onSearch}>搜索</button>
                </div>
            </div>
        )
    }
}