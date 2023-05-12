import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStuList = ()=>{
        axios.get('http://localhost:3000/api1/students').then(res=>{
            console.log("成功了",res.data);
        },err=>{
            console.log("失败了",err);
        })
    }
    getCarList = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(res=>{
            console.log("成功了",res.data);
        },err=>{
            console.log("失败了",err);
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.getStuList}>点击我请求学生数据</button>
        <button onClick={this.getCarList}>点击我请求汽车数据</button>
      </div>
    )
  }
}
