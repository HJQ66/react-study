import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {
  state = {
    iptValue:''
  }
  //对传入的props进行类型限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  //鼠标按下事件
  handler = (event)=>{
    const {target,keyCode} = event
    //相当于vue的数据双向绑定
    this.setState({
      iptValue:target.value
    })
    //判断是否是点击回车添加
    if(keyCode!==13) return
    //判断添加的任务是否为空
    if(!target.value){
      alert('请输入事件')
      return
    }
    //整理需要添加的任务
    let newObj = {
      id:nanoid(),
      name:target.value,
      done:false
    }
    //执行回调，个父组件穿参
    this.props.addTodo(newObj)
    //添加完成任务之后 清空输入框
    target.value = ''
  }

  render() {
    return (
      <header>
        <input className='ipt_task' type="text" onKeyUp={this.handler}  placeholder='请输入你的任务名称，按回车确认' />
      </header>
    )
  }
}
