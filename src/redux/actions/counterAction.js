import { INCREASE,DECREASE } from "./actionType";

export const increase = ()=>{
    return{
        type:INCREASE
    }
}

export const decrease = ()=>{
    return{
        type:DECREASE
    }
}