//createStore：用户创建store   applyMiddleware：应用中间件
import { createStore,applyMiddleware } from "redux";

//导入redux-thunk，用户支持异步action
import thunk from "redux-thunk";
//引入redux-devtools-extension,用于支持开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'

//导入汇总之后的reducer
import reducers from './reducers'


export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))