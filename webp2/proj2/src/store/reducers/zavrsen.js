
import { KRAJ_PARTIJE } from '../actions'

export default function (state=0,action){
    switch(action.type){
        case KRAJ_PARTIJE:{
            var state1=state
            state1=state1+1
            return state1
        }
        default:
            return state
    }
}