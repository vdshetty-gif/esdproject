import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit(){
  }
  
  logout(){
    this._router.navigate(['/homepage']);    
  
  }

}




