import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom/cjs/react-router-dom.min'

import Detail from './Detail'
import './index.css'

export default class News_2 extends Component {
    state = {
        newsList:[
            {id:'001',title:'我是新闻1,点我查看详情'},
            {id:'002',title:'我是新闻2,点我查看详情'},
            {id:'003',title:'我是新闻3,点我查看详情'},
            {id:'004',title:'我是新闻4,点我查看详情'},
        ]
    }
  render() {
    const {newsList} = this.state
    return (
      <ul className='news2_container'>
        {
            newsList.map(item=>{
                // 路由传参第一种方法 params参数
                // return <Link className='news2_item' to={`/home/news2/detail/${item.id}/${item.title}`} key={item.id}>{item.title}</Link>

                // 路由传参二：search参数
                // return <Link className='news2_item' to={`/home/news2/detail?id=${item.id}&title=${item.title}`} key={item.id}>{item.title}</Link>

                //路由传参三：state参数
                return <Link className='news2_item' to={{pathname:`/home/news2/detail`,state:{id:item.id,title:item.title}}} key={item.id}>{item.title}</Link>
            })
        }
        {/* 路由传参第一种方法 params参数*/}
        {/* <Route path='/home/news2/detail/:id/:title' component={Detail}></Route> */}

        {/* 路由传参二：search参数 */}
        {/* <Route path='/home/news2/detail' component={Detail}></Route> */}

        {/* 路由传参三：state参数 */}
        <Route path='/home/news2/detail'  component={Detail}></Route>
      </ul>
    )
  }
}
