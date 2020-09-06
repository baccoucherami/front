import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   myform={}
  //  form: FormGroup;
  constructor(public router: Router) {

    // this.form = this.fb.group({
    //   mail: ['', Validators.email],
    //   password: ['', Validators.required]
    // })
   }

  ngOnInit() {



  }
  logForm(){
    console.log(this.myform);
    this.router.navigate(['/home']);
  }

}
