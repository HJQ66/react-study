import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import './index.css'
export default class List extends Component {
  state = {
    userList:[],
    isLoading:false,//加载中
    err:"",//展示错误信息
    isStart:true//开始状态
  }
  //生命周期，组件挂载时调用
  componentDidMount(){
    //订阅事件，用于兄弟组件之间传值
    PubSub.subscribe("updateState",(_,res)=>{
      // _ 为消息名
      this.setState(res)
    })
  }
  render() {
    const {userList, isStart,err,isLoading} = this.state
    return (
      <div className='list_box'>
        {
          isStart ? <h3>请输入关键词搜索</h3> : 
          isLoading ? <h3>Loading...</h3> : 
          err ? <h3 style={{color:'red'}}>{err}</h3> :
          userList.map(item => {
            return (
              <a  href={item.html_url} className='item' key={item.id}>
                <img src={item.avatar_url} alt="" />
                <p>{item.login}</p>
              </a>
            )
        })}
      </div>
    )
  }
}
