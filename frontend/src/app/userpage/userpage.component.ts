import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl:'./userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  username:String='';
  constructor(private _user:UserService, private _router:Router) { 
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data:any){
    this.username = data.username;
  }
  ngOnInit() {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }

  mvideos(){
    this._router.navigate(['/mvideos']);
    
  }
  articles(){
    this._router.navigate(['/articles']);
    
  }
}
