import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authSrv:AuthServiceService,private router:Router, private http: HttpClient ) { }

  ngOnInit(): void {
  }

  signUpForm(f:NgForm){
      console.log(f.value);
      //this.authSrv.signUp(f.value).subscribe(()=>{
        this.registerUser(f.value).subscribe(() => {
          this.router.navigate(['login']);
        });
      //})
  }

  registerUser(formData: any) {
    const url = 'http://localhost:8080/api/auth/register';
    const body = {
      name: formData.name,
      username:formData.username,
      email: formData.email,
      password: formData.password,
      roles:[]
    };
    console.log(body);
    //localStorage.clear();

    return this.http.post(url, body, { responseType: 'text' });
  }

}
