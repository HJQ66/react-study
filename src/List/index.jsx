import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'
export default class List extends Component {
  static propTypes = {
    userList:PropTypes.array.isRequired
  }

  render() {
    const {userList, isStart,err,isLoading} = this.props
    console.log(isLoading);
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
