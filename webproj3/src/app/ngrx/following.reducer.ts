import * as actions from './actions'
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector } from '@ngrx/store'


export interface followedUser {
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}

export const usrAdapter = createEntityAdapter<followedUser>()//obezbedjuje f-je za crud operacije
export interface usrState extends EntityState<followedUser>{}
//const dflFollowedUsr={//stanje se sastoji od niza id-ja i korisnika koje prati
//    ids: ['1'],
//    entities:[{
//        '1':{
//            id:'1',
//            name:'Leanne Graham',
//            username:'Bret',
//            email:'Sincere@april.biz',
//            phone:'1-770-736-8031 x56442'
//        }
//    }]
//}

export const initialState: usrState=usrAdapter.getInitialState({})
/*povezuje stanje sa entitetom*/


export function usrReducer(
    state: usrState=initialState,
    action: actions.UsrActions){
        switch(action.type){
            case actions.CREATE:
                return usrAdapter.addOne(action.usr, state)//ovo su funkcije koje dolaze uz entitete       
            case actions.UPDATE:
                return usrAdapter.updateOne({
                    id:action.id,
                    changes:action.changes
                }, state)
            case actions.DELETE:
                return usrAdapter.removeOne(action.id,state) 
            default:
                return state
            }
}
export const getUsrState=createFeatureSelector<usrState>('usr')

export const{
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
}=usrAdapter.getSelectors(getUsrState)