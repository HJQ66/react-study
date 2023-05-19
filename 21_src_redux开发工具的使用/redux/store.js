//createStore：用户创建store   applyMiddleware：应用中间件
import { createStore,applyMiddleware,combineReducers } from "redux";
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//导入redux-thunk，用户支持异步action
import thunk from "redux-thunk";
//引入redux-devtools-extension,用于支持开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'

const allReducer = combineReducers({
    count:countReducer,
    person:personReducer
})

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))