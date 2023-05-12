import React,{Component} from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

import './App.css'

export default class App extends Component{
    state = {
        // todoList:[
        //     {id:'001',name:'吃饭',done:false},
        //     {id:'002',name:'睡觉',done:true},
        //     {id:'003',name:'打豆豆',done:false},
        //     {id:'004',name:'逛街',done:false},
        // ]
        todoList:JSON.parse(localStorage.getItem('TODO')) || []
    }
    //添加任务
    addTodo = (todoObj)=>{
        const {todoList} = this.state 
        // this.setState({
        //     todoList:[todoObj,...todoList]
        // })
        let newTodoList = [todoObj,...todoList]
        localStorage.setItem('TODO',JSON.stringify(newTodoList))
        this.setState({
            todoList:newTodoList
        })
    }
    //修改任务状态
    updateTodo = (id,done)=>{
        const {todoList} = this.state 
        const newTodos =  todoList.map(item=>{
            if(item.id === id){
               return {...item,done}
            }else{
                return item
            }
        })
        localStorage.setItem('TODO',JSON.stringify(newTodos))
        this.setState({
            todoList:newTodos
        })
    }
    //删除一个todo
    deleteTodo = (id)=>{
        const {todoList} = this.state
        let newTodoList = todoList.filter(item=>item.id!==id)
        localStorage.setItem('TODO',JSON.stringify(newTodoList))
        this.setState({
            todoList:newTodoList
        })
    }
    //处理全选按钮
    checkAllTodo = (done)=>{
        const {todoList} = this.state
        let newTodoList = todoList.map(item=>{
            item.done=done 
            return item
        })
        localStorage.setItem('TODO',JSON.stringify(newTodoList))
        this.setState({
            todoList:newTodoList
        })
    }
    //清空已完成任务
    clearTodo = ()=>{
        const {todoList} = this.state
        let newTodoList = todoList.filter(item=>!item.done)
        localStorage.setItem('TODO',JSON.stringify(newTodoList))
        this.setState({
            todoList:newTodoList
        })
    }
    render(){
        const {todoList} = this.state
        return(
            <div className="container">
                <Header addTodo = {this.addTodo} />
                <List todoList = {todoList} updateTodo = {this.updateTodo} deleteTodo={this.deleteTodo} />
                <Footer todoList = {todoList} checkAllTodo={this.checkAllTodo} clearTodo={this.clearTodo}/>
            </div>
        )
    }
}