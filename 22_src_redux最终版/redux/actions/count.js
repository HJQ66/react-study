// 导入常量
import { INCREMENT,DECREMENT } from "../constant"

// 该模块用户创建action对象

// 同步action，就是指action的值为Object类型的一般对象
export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})

// 异步action，就是指action的值为函数
export const incrementAsync = (data,time) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data))
        },time)
    }
}