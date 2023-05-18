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
    routerPush = (id,title)=>{
      //路由传参第一种方法 params参数
      // this.props.history.push(`/home/news2/detail/${id}/${title}`)

      //路由传参二：search参数
      // this.props.history.push(`/home/news2/detail?id=${id}&title=${title}`)

      //路由传参三：state参数
      this.props.history.push({pathname:'/home/news2/detail',state:{id:id,title:title}})
    }
    routerReplace = (id,title)=>{
      //路由传参第一种方法 params参数
      // this.props.history.replace(`/home/news2/detail/${id}/${title}`)

      //路由传参二：search参数
      // this.props.history.replace(`/home/news2/detail?id=${id}&title=${title}`)

      //路由传参三：state参数
      this.props.history.replace({pathname:'/home/news2/detail',state:{id:id,title:title}})
    }
    //后退
    back = ()=>{
      console.log(this.props);
      this.props.history.goBack()
    }
    //前进
    forward = ()=>{
      this.props.history.goForward()
    }
    //向前走三步
    go = ()=>{
      //正数就是向前走几步，复数就是向后走几步
      this.props.history.go(3)
    }

  render() {
    const {newsList} = this.state
    return (
      <ul className='news2_container'>
        {
            newsList.map(item=>{
              return(
                <li key={item.id}>
                  {/* 路由传参第一种方法 params参数 */}
                  {/* <Link className='news2_item' to={`/home/news2/detail/${item.id}/${item.title}`} key={item.id}>{item.title}</Link> */}

                  {/* // 路由传参二：search参数 */}
                  {/* <Link className='news2_item' to={`/home/news2/detail?id=${item.id}&title=${item.title}`} key={item.id}>{item.title}</Link> */}

                  {/* 路由传参三：state参数  replace={true} ，表示以replace方式跳转路由，默认是push跳转 */}
                  <Link replace={true} className='news2_item' to={{pathname:`/home/news2/detail`,state:{id:item.id,title:item.title}}}>{item.title}</Link>

                  <button onClick={()=>this.routerPush(item.id,item.title)}>push跳转</button>
                  <button onClick={()=>this.routerReplace(item.id,item.title)}>replace跳转</button>
                </li>
                )
            })
        }
        {/* 路由传参第一种方法 params参数*/}
        {/* <Route path='/home/news2/detail/:id/:title' component={Detail}></Route> */}

        {/* 路由传参二：search参数 */}
        {/* <Route path='/home/news2/detail' component={Detail}></Route> */}

        {/* 路由传参三：state参数 */}
        <Route  path='/home/news2/detail'  component={Detail}></Route>

        <button onClick={()=>this.forward()}>前进</button>
        <button onClick={()=>this.back()}>后退</button>
        <button onClick={()=>this.go()}>向前走三步</button>
      </ul>
    )
  }
}
