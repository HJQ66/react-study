import React, { Component } from 'react'
import { Route,Redirect,Switch } from 'react-router-dom/cjs/react-router-dom.min'
import MyNavLink from '../../components/MyNavLink'
import './index.css'
import News_1 from './News_1'
import News_2 from './News_2'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>我是Home组件</h1>
        <div className='news_container'>
          <ul className='nav_news'>
            <MyNavLink className='nav_news_item' to='/home/news1'>新闻1</MyNavLink>
            <MyNavLink className='nav_news_item' to='/home/news2'>新闻2</MyNavLink>
          </ul>
          {/* Switch匹配完成之后不再向下匹配 */}
          <Switch>
            <Route path='/home/news1' component={News_1}></Route>
            <Route path='/home/news2' component={News_2}></Route>
            {/* Redirect路由重定向 */}
            <Redirect to='/home/news1'></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
