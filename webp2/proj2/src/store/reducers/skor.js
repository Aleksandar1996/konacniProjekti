import {NOVI_SKOR} from '../actions'
import Axios from 'axios'
var igraci=[]

function ucitaj(){
    Axios.get("http://localhost:3002/highscores").then(res=>{
        let i=0
        res.data.forEach(element => {
            igraci[i]=Object.assign({},element)
            i++
        });
    })
}
ucitaj()

export default function updateSkor(state=igraci,action){
    switch(action.type){
        case NOVI_SKOR:{
            var igraci1=[]
            let i=0
            state.forEach(element=>{
                igraci1[i]=Object.assign({},element)
                i++
            })
            igraci1.push({
                id:(action.payload.brEl+1),
                nick:action.payload.nick,
                preostalo_poteza:action.payload.potezi
            })
            console.log(igraci1)
            return igraci1
        }
        default:{
            return igraci
        }
    }   
}