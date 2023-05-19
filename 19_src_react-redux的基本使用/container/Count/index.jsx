import { connect } from "react-redux";
//引入Count的UI组件
import CountUI from "../../components/Count";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_actions'

//映射状态
function mapStateToProps(state){
    return {count:state}
}

//映射操作状态的方法
function mapDispatchToProps(disptch){
    return{
        jia:(number)=>disptch(createIncrementAction(number)),
        jian:(number)=>disptch(createDecrementAction(number)),
        asyncJia:(number,time)=>disptch(createIncrementAsyncAction(number,time))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

