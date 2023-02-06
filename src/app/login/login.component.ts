import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
 signupUsers:any[]=[];
 signupObj:any={
  userName:'',
  emailRegex:'',
  password:'',
 };
 loginObj:any={
    userName:'',
    email:'',
    password:'',
    repeatpassword:''
 }
  constructor(){}
  ngOnInit():void{
    let localData = localStorage.getItem('signUpUsers') || '';
    if(localData){
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
    if (this.signupObj.password.length < 8) {
      alert('Password must be at least 8 characters long');
    } else {
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    }
  }
  onLogin() {
    const MIN_PASSWORD_LENGTH = 8; // desired minimum length
  
    if (this.loginObj.password.length < MIN_PASSWORD_LENGTH) {
      alert(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
      return;
    }
    // if (this.loginObj.password !== this.loginObj.repeatPassword) {
    //   alert('Password and repeat password do not match');
    //   return;
    // }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

       if (!emailRegex.test(this.loginObj.email)) {
        alert('Email is not in the correct format');
       return;
}
const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      alert('user does not exist')
    } else {
      alert('user  exist')
    }
  }
  }




