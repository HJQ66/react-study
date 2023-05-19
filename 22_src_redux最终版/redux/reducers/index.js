// 该文件用于汇总所有的reduce

//为Count组件服务的reducer
import count from './count'
//为Person组件服务的reducer
import person from './person'

import { combineReducers } from 'redux'

//汇总所有的reducer变为一个总的reducer
export default combineReducers({count,person})