import React, { Component } from 'react'
import List from './List'
import Search from './Search'
import './App.css'

export default class App extends Component {
  state = {
    userList:[],
    isLoading:false,//加载中
    err:"",//展示错误信息
    isStart:true//开始状态
  }
  updateState = (stateObj)=>{
    this.setState(stateObj)
  }
  render() {
    return (
      <div className='container'>
        <Search updateState = {this.updateState} />
        <List {...this.state}/>
      </div>
    )
  }
}
