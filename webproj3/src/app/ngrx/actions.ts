import { Action } from '@ngrx/store'
import { followedUser } from './following.reducer'

export const CREATE ='[Users] Create'
export const UPDATE ='[Users] Update'
export const DELETE ='[Users] Delete'
export const SAVE = '[Users] Save'

export class Create implements Action{
    readonly type = CREATE
    constructor(public usr: followedUser){}
}

export class Save implements Action{
    readonly type = SAVE
    constructor(public usr: followedUser){
        console.log("pozvao SAVE")
    }
}

export class Update implements Action{
    readonly type = UPDATE
    constructor(
        public id: string,
        public changes: Partial<followedUser>
    ){}
}
export class Delete implements Action {
    readonly type = DELETE
    constructor(public id:string){}
}
export type UsrActions
=Create
|Update
|Delete
|Save
