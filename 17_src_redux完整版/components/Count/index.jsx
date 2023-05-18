import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction,createDecrementAction } from "../../redux/count_actions";

export default class Count extends Component {

  componentDidMount(){
    //检测redux中状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }
  caculate = (type)=>{
    const {value} = this.getValue
    //奇数加
    if(type==='oddIncrement'){
      if(store.getState()%2!==0){
        store.dispatch(createIncrementAction(value*1))
      }
    }
    // 异步加
    if(type==='asyncIncrement'){
      setTimeout(()=>{
        store.dispatch(createIncrementAction(value*1))
      },1000)
    }
    // 加
    if(type==='increment'){
      store.dispatch(createIncrementAction(value*1))
    }
    // 减
    if(type === 'decrement'){
      store.dispatch(createDecrementAction(value*1))
    }
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.getValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={()=>this.caculate('increment')}>+</button>&nbsp;
        <button onClick={()=>this.caculate('decrement')}>-</button>&nbsp;
        <button onClick={()=>this.caculate('oddIncrement')}>奇数加</button>&nbsp;
        <button onClick={()=>this.caculate('asyncIncrement')}>异步加</button>&nbsp;
      </div>
    )
  }
}
