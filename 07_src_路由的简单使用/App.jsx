import React, { Component } from 'react'
import Header from './components/Header'
import { Link,Route } from 'react-router-dom/cjs/react-router-dom.min'

import Home from './pages/Home'
import About from './pages/About'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <main>
          <div className='nav_container'>
            <Link className='active' to='/about'>About</Link>
            <Link to='/home'>Home</Link>
          </div>
          <div className='content'>
           <Route path='/home' component={Home}></Route>
           <Route path='/about' component={About}></Route>
          </div>
        </main>
      </div>
    )
  }
}
