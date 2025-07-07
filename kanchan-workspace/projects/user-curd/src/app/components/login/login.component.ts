import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username='';
password='';

constructor(private auth:AuthService,private router:Router){}

login(){
  const success=this.auth.login(this.username,this.password);
  if(success){
    //console.log("data: ",this.username,this.password)
    console.log('Login success..')
    localStorage.setItem('login-data',`${this.username} ${this.password}`)
    this.router.navigate(['user-list']);
  }
  else{
    alert('Invalid credentials.')
  }
}
}
