import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store'
import { usrReducer } from './following.reducer'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('usr',usrReducer)
  ],
  declarations: []
})
export class UserModule { }
