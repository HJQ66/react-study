import React, { Component } from 'react'
import Count from './container/Count' //引入的时Count的容器组件
import Person from './container/Person'//引入的时Person的容器组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
        <hr />
        <Person/>
      </div>
    )
  }
}
