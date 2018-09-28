import { NOVA_IGRA } from "../actions"

const initState={
    dimenzije:0,
    tezina:0
}

export default function (state=initState,action){
    switch(action.type){
        case NOVA_IGRA:
            const state1=Object.assign({},state,{dimenzije:action.payload.dimenzije},{tezina:action.payload.tezina})
            return state1
        default:
            return state
    }
}