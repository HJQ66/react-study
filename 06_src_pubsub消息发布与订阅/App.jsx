import React, { Component } from 'react'
import List from './List'
import Search from './Search'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Search/>
        <List/>
      </div>
    )
  }
}
