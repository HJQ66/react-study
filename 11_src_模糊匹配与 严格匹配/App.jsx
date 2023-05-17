import React, { Component } from 'react'
import Header from './components/Header'
import { Route,Switch } from 'react-router-dom/cjs/react-router-dom.min'

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
            <MyNavLink  to='/about/a/b'>About</MyNavLink>
            <MyNavLink to='/home/a/b'>Home</MyNavLink>
          </div>
          <div className='content'>
            {/* Switch组件作用：将路由组件进行单一匹配，如果匹配到该路由组件就不再往下执行，提高效率 */}
            <Switch>
              {/* exact开启严格匹配，上方所需要链接的路径必须与当前path路径一致；默认开启的是模糊匹配 */}
                <Route exact path='/home' component={Home}></Route>
                <Route  path='/about' component={About}></Route>
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}
