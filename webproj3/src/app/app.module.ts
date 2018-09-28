import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GornjideoComponent } from './gornji_deo/gornji_deo.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { UserModule } from './ngrx/usr.module'
import { reducers } from './ngrx/reducers'
import { usrEffect } from './ngrx/effects/effects'

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    GornjideoComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([usrEffect]),
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
