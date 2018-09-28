import { NOVA_IGRA } from "../actions"
import { NOVI_KLIK } from "../actions"
import { VRATI_POTEZ } from "../actions"

export default function (state=0,action){
    switch(action.type){
        case NOVA_IGRA:{
            var state1=action.payload.tezina*action.payload.dimenzije*7
            return state1
        }
        case NOVI_KLIK:{
            state1=state
            if(action.payload.matrica[action.payload.i][action.payload.j].stanje!==2 && action.payload.matrica[action.payload.i][action.payload.j].stanje!==1){
                state1=state1-1
            }
            return state1
        }
        case VRATI_POTEZ:{
            state1=state
            if(state1<(action.payload.tezina*action.payload.dimenzije*7)){
            for(let i=0;i<action.payload.dimenzije;i++){
                  for(let j=0;j<action.payload.dimenzije;j++){
                         if(action.payload.matrica[i][j].stanje===1){
                            state1=state1+1
                         }
                    }
                 }
            }
            return state1
            }
        default:
            return state
    }
}
