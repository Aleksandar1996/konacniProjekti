import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as Usrs from '../ngrx/following.reducer'
import { followedUser } from '../ngrx/following.reducer'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private store: Store<Usrs.usrState>) { 
    //store.dispatch(new Create({
    //    id:1,
    //    name:'Leanne Graham',
    //    username:'Bret',
    //    email:'Sincere@april.biz',
    //    phone:'1-770-736-8031 x56442'
    //}))
  }

  ngOnInit() {
    this.store.select(Usrs.selectAll).subscribe((korisnik:followedUser[])=>{
      this.users=korisnik
    })
  }
}
    //this.store.select(Usrs.selectAll).subscribe(users=>{
    //this.users=users;
    //console.log(this.users)
    /*kad se inicijalizuje procita sve usere
    na koje se pretplatio*/
  /*u entitetu pamtis one koje prikazujes,znaci procitas iz entiteta za prikaz*/


