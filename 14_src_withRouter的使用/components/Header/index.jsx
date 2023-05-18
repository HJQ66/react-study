import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  //后退
  back = ()=>{
    console.log(this.props);
    this.props.history.goBack()
  }
  //前进
  forward = ()=>{
    this.props.history.goForward()
  }
  //向前走三步
  go = ()=>{
    //正数就是向前走几步，复数就是向后走几步
    this.props.history.go(3)
  }

  render() {
    return (
      <div>
        <h1 style={{borderBottom:'1px solid #eee'}}>React Router Demo</h1>
        <button onClick={()=>this.forward()}>前进</button>
        <button onClick={()=>this.back()}>后退</button>
        <button onClick={()=>this.go()}>向前走三步</button><br /><br />
        <hr />
      </div>
    )
  }
}

export default withRouter(Header)
//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API，让其可以进行路由跳转
//withRouter的返回值是一个新组件
