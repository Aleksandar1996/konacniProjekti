import {combineReducers} from 'redux'
import initVrednosti from './init'
import initMatrica from './printMatrica'
import brojPoteza from './brojPoteza'
import kPartije from './zavrsen'
import proveraPobede from './provera'
import updateSkor from './skor'


/*mora broj preostalih poteza da se navede pre matrice,jer kad vracas stanje
prvo initMatrica sakrije polja pa onda brojPoteza ne moze da vrati potez jer
su zatvorena sva otvorena nepogodjena polja*/
/*jer kako su navedeni ovde,tim redosledom odgovaraju na signal koji salje akcija*/
const rootReducer = combineReducers({
    tipIgre: initVrednosti,
    potezi: brojPoteza,
    matrica: initMatrica,
    krajPartije:kPartije,
    pobeda:proveraPobede,
    skor:updateSkor
})
export default rootReducer