import { INCREASE, DECREASE } from "../actions/actionType";


let initialState = {
    count:0
}


export const counterReducer = (state=initialState,action)=>{
    switch(action.type){
        case INCREASE:
            return(
                {
                    ...state , count:state.count+1 
                }
            )
        case DECREASE:
            return(
                {
                    ...state, count:state.count-1
                }
            )
        default:
            return state
    }
}

