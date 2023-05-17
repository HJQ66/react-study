import React, { Component } from 'react'
import Header from './components/Header'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'

import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <main>
          <div className='nav_container'>
            {/* 使用NavLink，加上activeClassName属性，可以根据点击哪个组件，就给哪个组件添加active类名 */}
            <MyNavLink  to='/about'>About</MyNavLink>
            <MyNavLink to='/home'>Home</MyNavLink>
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
