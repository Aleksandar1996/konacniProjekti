import { PROVERA_POBEDE } from '../actions'
import { NOVA_IGRA } from '../actions'

export default function(state=0,action){
    switch(action.type){
        case PROVERA_POBEDE:{
            let k=1
            for(let i=0;i<action.payload.dimenzije;i++){
                for(let j=0;j<action.payload.dimenzije;j++){
                    if(action.payload.matrica[i][j].stanje!==2){
                        k=0
                    }
                }
            }
            var state1=state
            if(k===1){
                state1=1
            }
            return state1
        }
        case NOVA_IGRA:{
            state1=state
            state1=0
            return state1
        }
        default:
            return state
    }
}