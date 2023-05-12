import React, { Component } from 'react'

import './index.css'
export default class Footer extends Component {
   //处理全选按钮
  handlerCheckAllTodo = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  //清空所有已完成的todo
  handlerClearTodo = ()=>{
    this.props.clearTodo()
  }
  render() {
    const {todoList} = this.props
    //计算已完成的任务
    const isDone = todoList.reduce((pre,cur)=>pre+(cur.done?1:0),0)
    //所有任务
    const allTodo = todoList.length
    return (
      <footer>
        <input className='ipt_check' type="checkbox" onChange={this.handlerCheckAllTodo}  checked={isDone===allTodo&&allTodo?true:false}/>
        <span>已完成{isDone}/全部{allTodo}</span>
        <button className='clear_btn' onClick={this.handlerClearTodo}>清除已完成任务</button>
      </footer>
    )
  }
}
