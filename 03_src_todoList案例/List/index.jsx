import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from './Item'
import './index.css'

export default class List extends Component {

  //对传入的props进行类型限制
  static propTypes = {
    todoList:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }

  render() {
      const {todoList,updateTodo,deleteTodo} = this.props
    return (
      <div className='item_box'>
        {
          todoList.map(item=>{
            return  <Item item = {item} key={item.id} updateTodo = {updateTodo} deleteTodo={deleteTodo}/>
          })
        }
       
      </div>
    )
  }
}
