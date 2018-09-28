import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router';
import * as Usrs from '../ngrx/following.reducer'
import { followedUser } from '../ngrx/following.reducer'
import * as actions from '../ngrx/actions'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: any;
  userPosts: any;
  followed:number;
  index:number;

  constructor(private data: DataService, private route: ActivatedRoute,private store: Store<Usrs.usrState>) {
    this.route.params.subscribe(params=>this.user=params.id)/*za rutiranje je imenovan id,
    tako izvlacis parametre iz url-a*/
    this.index=this.user
   }

  ngOnInit() {
    let index=Object.assign(this.user)
    this.data.getUser(this.user).subscribe(
    data => this.user = data
  )
    this.data.getPosts().subscribe((posts:any)=>{
      this.userPosts=posts.filter(element=>{
        return element.userId==index;
      })
    })
    this.isFollowed()
  }
  isFollowed(){
    this.store.select(Usrs.selectAll).subscribe((korisnik:followedUser[])=>{
      this.followed=0
      korisnik.forEach(element=>{
        if(element.id==this.index){
          this.followed=1
        }
      })
    })
  }
  startFollowing(){
    this.store.dispatch(new actions.Create(this.user))
    this.followed=1
    //ovde pali akciju za save
    this.store.dispatch(new actions.Save(this.user))
    //this.data.setFollowing(this.user)
    //dodaje u entitet
  }
  stopFollowing(){
    this.store.dispatch(new actions.Delete(this.index.toString()))
    this.followed=0
    //ovde pali akciju za brisanje
    //this.data.unsetFollowing(this.user)
    //brise iz entiteta
  }
  /*mora da ima funkcije koje izbacuju element iz liste entiteta i koji dodaje sebe*/
/*ovaj iz entiteta procita sve svoje postove koje dodeli promenljivoj*/
}
