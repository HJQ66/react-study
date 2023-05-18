import React, { Component } from 'react'
import qs from 'qs'
import "./index.css"


const myList = [
    {id:'001',title:'我是新闻1,点我查看详情',content:'新闻1大爆料'},
    {id:'002',title:'我是新闻2,点我查看详情',content:'新闻2大爆料'},
    {id:'003',title:'我是新闻3,点我查看详情',content:'新闻3大爆料'},
    {id:'004',title:'我是新闻4,点我查看详情',content:'新闻4大爆料'},
]
export default class Detail extends Component {
  render() {
    // 方式一： 获取params参数
    // const {id,title} = this.props.match.params

    // 方式二：获取search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))//第三方模块解析urlencoded编码格式

    // 方式三：获取state参数
    const {id,title} = this.props.location.state

    
    const findResult = myList.filter(item=>item.id===id)

    return (
      <ul className='detail_container'>
        <li className='detail_item'>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{findResult[0].content}</li>
      </ul>
    )
  }
}
