import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private authSrv:AuthServiceService, private router:Router, private http: HttpClient ) { }

  ngOnInit(): void {
  }


  loginForm(f:NgForm){
    console.log(f.value)
      this.authSrv.logIn(f.value).subscribe(()=>{
      this.loginUser(f.value).subscribe(()=>{
        this.router.navigate(['/localita'])
      })

    })
  }

  loginUser(formData:any){
    const url = 'http://localhost:8080/api/auth/login';
    const body = {
      username:formData.username,
      password: formData.password
    };
    console.log(body);
    //localStorage.clear();

    return this.http.post(url, body);
  }

}
