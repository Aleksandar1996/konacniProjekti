import {NOVI_SKOR} from '../actions'
import takeEvery from 'redux-saga'
import { call } from 'redux-saga/effects'
import Axios from 'axios'


export default function* rootSaga(){
    console.log("uso u root")
    yield takeEvery(NOVI_SKOR,upisiSkor)
}
function* upisiSkor(action){
    console.log("uso je u f-ju")
    try{
        const response = yield call(Axios.post,"http://localhost:3002/highscores",{
            id:action.payload.brEl+1,
            nick:action.payload.nick,
            preostalo_poteza:action.payload.potezi
        })
        console.log(response)
    }catch(e){
        console.log("Doslo je do greske prilikom upisa u bazu podataka!"+e)
    }
}
