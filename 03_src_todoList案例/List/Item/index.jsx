import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    isEnter:false
  }
  //鼠标进入Item组件的事件
  handlerEnter = (isEnter) => {
      return ()=>{
        this.setState({
          isEnter:isEnter
        })
      }
  }
  //鼠标离开Item组件的事件
  handlerLeave= (isEnter) => {
    return ()=>{
      this.setState({
        isEnter:isEnter
      })
    }
  }
  //处理勾选事件
  handlerCheck = (id)=>{
    return (event) => {
      const {updateTodo} = this.props
      updateTodo(id,event.target.checked)
    }
  }
  //通知父组件删除一个todo
  handlerDelete = (id)=>{
    if(window.confirm("确定删除吗？")){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id,name,done} = this.props.item
    return (
      <div className='task_item' style={{background:this.state.isEnter?"#eee":'#fff'}} onMouseEnter={this.handlerEnter(true)} onMouseLeave={this.handlerLeave(false)}>
        <input type="checkbox" checked = {done} onChange={this.handlerCheck(id)}/>
        <span>{name}</span>
        <button className='btn_del' onClick={()=>this.handlerDelete(id)} style={{display:this.state.isEnter ? 'block' : 'none'}}>删除</button>
      </div>
    )
  }
}
