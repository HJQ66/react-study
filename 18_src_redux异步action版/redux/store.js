//createStore：用户创建store   applyMiddleware：应用中间件
import { createStore,applyMiddleware } from "redux";
import countReducer from './count_reducer'
//导入redux-thunk，用户支持异步action
import thunk from "redux-thunk";

export default createStore(countReducer,applyMiddleware(thunk))