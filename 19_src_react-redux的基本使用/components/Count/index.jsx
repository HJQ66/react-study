import React, { Component } from 'react'
import store from '../../redux/store';

export default class Count extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  caculate = (type)=>{
    const {value} = this.getValue
    const {count} = this.props
    //奇数加
    if(type==='oddIncrement'){
      if(count%2 !== 0)
        this.props.jia(value*1)
      }
    // 异步加
    if(type==='asyncIncrement'){
      this.props.asyncJia(value*1,500)
    }
    // 加
    if(type==='increment'){
      this.props.jia(value*1)
    }
    // 减
    if(type === 'decrement'){
      this.props.jian(value*1)
    }
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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
