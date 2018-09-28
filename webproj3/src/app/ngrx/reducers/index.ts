import { ActionReducerMap } from '@ngrx/store'
import { usrReducer } from '../following.reducer' 

export const reducers: ActionReducerMap<any> = {
    user: usrReducer
}