import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mvideos',
  templateUrl: './mvideos.component.html',
  styleUrls: ['./mvideos.component.css']
})
export class MvideosComponent implements OnInit {

  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit(){
  }
  
  logout(){
    this._router.navigate(['/homepage']);    
  
  }

  


}
