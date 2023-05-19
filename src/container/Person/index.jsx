import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid';

import { addPerson } from '../../redux/actions/person';

class Person extends Component {
  addPerson = () => {
    const personObj = {id:nanoid(),name:this.name.value,age:this.age.value}
    this.props.addPerson(personObj)
  }
  render() {
    return (
      <div>
        <h1>当前人数为：{this.props.person.length}，Count组件求和为：{this.props.count}</h1>
        <input type="text" ref={c=>this.name=c} placeholder='输入姓名'/>
        <input type="text" ref={c=>this.age=c} placeholder='输入年龄'/>
        <button onClick={()=>this.addPerson()}>添加</button>
        <ul>
            {
              this.props.person.map(item => {
                return <li key={item.id}>姓名：{item.name}---年龄：{item.age}</li>
              })
            }
        </ul>
      </div>
    )
  }
}

export default connect(
  //mapStateToProps  给ui组件传props
  state=>({person:state.person,count:state.count}),
   //mapDispatchToProps  给ui组件传props
  {
    addPerson
  }
)(Person)
