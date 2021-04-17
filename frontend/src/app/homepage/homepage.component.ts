import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  contactForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    name:new FormControl(null,Validators.required),
    
  })

  constructor(private _router:Router, private _user:UserService) { }

  ngOnInit(): void {
  }
  movetocontact(){
    if(!this.contactForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.contact(JSON.stringify(this.contactForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/homepage']);} ,
      error=>console.error(error)
    )
}
}
