// 导入常量
import { INCREMENT,DECREMENT } from "../constant";

//初始化
let initState = 0
export default function countReducer(preState=initState,action){
    const {type,data} = action
   switch (type) {
    case INCREMENT:
        return preState+data*1;
    case DECREMENT:
        return preState-data;
    default:
        return preState;
   }
}