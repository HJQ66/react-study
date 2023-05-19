import { ADDPERSON } from "../constant";

const initPerson = [{id:'001',name:'carry',age:20}]
export default function personReducer(personObj=initPerson,action){
    const {type,data} = action
    switch (type) {
        case ADDPERSON:
            return [data,...personObj]
        default:
            return personObj;
    }

}