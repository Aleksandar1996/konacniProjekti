import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import * as actions from '../actions'
import { DataService } from '../../data.service';
import { concatMap } from 'rxjs/operators'

@Injectable()
export class usrEffect{
    constructor(private actions$: Actions, private data: DataService){
        console.log('uso u efekat')
    }
    @Effect({dispatch:false})
    saveUsrs$= this.actions$.pipe(
        ofType<actions.Save>( actions.SAVE ),
        concatMap( loadAction => [
          this.data.setFollowing(loadAction.usr)
        ])
    )
}
    
