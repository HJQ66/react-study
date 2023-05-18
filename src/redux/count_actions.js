// 导入常量
import { INCREMENT,DECREMENT } from "./constant"

// 该模块用户创建action对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})