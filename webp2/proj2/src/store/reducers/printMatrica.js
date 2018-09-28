import { NOVA_IGRA } from "../actions"
import { NOVI_KLIK } from '../actions'
import { VRATI_POTEZ } from '../actions'
import { KRAJ_PARTIJE } from '../actions'
import Matrica from '../matrica'

const initState=new Matrica(0)
/*ovde ces da napravis matricu s elemetima polja koju ces da proveravas posle */
/*ova funkcija treba da vrati matricu de se id ponavlja 2 puta*/
export default function(state=initState,action){
    switch(action.type){
        case NOVA_IGRA:{
        var mat=new Matrica(action.payload.dimenzije)
        var state1=mat.vratiMatricu()
        var n1=0;
        var n2=0;
        var n3=1;
        while(n1<(action.payload.dimenzije*action.payload.dimenzije/2))
        {
            while(n2<2)
            {
                let h=Math.floor((Math.random()*100)%action.payload.dimenzije);
                let h1=Math.floor((Math.random()*100)%action.payload.dimenzije);
                if(state1[h][h1].id===0)
                {
                    state1[h][h1].id=n3;
                    n2++;
                }
            }
            n3++
            n2=0;
            n1++;
        }
        return state1
        }
        case NOVI_KLIK:{
            state1=Object.assign({},state)
            if(state1[action.payload.i][action.payload.j].stanje===1||state1[action.payload.i][action.payload.j].stanje===2){
                return state1
            }
            let provera=0
            for(let i=0;i<action.payload.dimenzije;i++){
                for(let j=0;j<action.payload.dimenzije;j++){
                    if(state1[i][j].stanje===1){
                        provera=provera+1
                    }
                }
            }
            if(provera===0){
                state1[action.payload.i][action.payload.j].stanje=1
                return state1
            }
            else{
                if(provera===1){
                    for(let i=0;i<action.payload.dimenzije;i++){
                        for(let j=0;j<action.payload.dimenzije;j++){
                            if(state1[i][j].stanje===1){
                                if(state1[i][j].id===state1[action.payload.i][action.payload.j].id){
                                    //pogodjen par
                                    state1[action.payload.i][action.payload.j].stanje=2
                                    state1[i][j].stanje=2
                                    return state1
                                }
                                else{
                                    state1[action.payload.i][action.payload.j].stanje=1
                                    return state1
                                }
                            }
                        }
                    }
                }
                else{//ima 2 otvorena
                    for(let i=0;i<action.payload.dimenzije;i++){
                        for(let j=0;j<action.payload.dimenzije;j++){
                            if(state1[i][j].stanje===1){
                                state1[i][j].stanje=0
                            }
                        }
                    }
                    state1[action.payload.i][action.payload.j].stanje=1
                    return state1
                }
            }
            break
        }
        case VRATI_POTEZ:{
            state1=Object.assign({},state)
            for(let i=0;i<state1[0].length;i++){
                for(let j=0;j<state1[0].length;j++){
                    if(state1[i][j].stanje===1){
                        state1[i][j].stanje=0
                    }
                }
            }
            return state1
        }
        case KRAJ_PARTIJE:{
            state1=Object.assign({},state)
            for(let i=0;i<state1[0].length;i++){
                for(let j=0;j<state1[0].length;j++){
                    state1[i][j].stanje=2
                }
            }
            return state1
        }
        default:
            return state
    }
}

