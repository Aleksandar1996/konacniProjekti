import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { followedUser } from './ngrx/following.reducer';
import Axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/korisnici')
  }
  getUser(userId){
    return this.http.get('http://localhost:3000/korisnici/'+userId)
  }
  getPosts(){
    return this.http.get('http://localhost:3001/postovi')
  }
  setFollowing(data:followedUser){
    console.log(data)
    Axios.post('http://localhost:3002/followedUsrs',{
      name:data.name,
      username:data.username,
      email:data.email,
      phone:data.phone
    })
    //this.http.post<followedUser>('http://localhost:3002/',data,{
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Cache-Control':'no-cache'
    //  })
    //})
  }/*{
      name:data.name,
      username:data.username,
      email:data.email,
      phone:data.phone
    } */
}
