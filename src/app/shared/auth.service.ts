import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  constructor(private fireauth : AngularFireAuth,private router : Router) { }

  //login method
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true') ; 
     }, err=>{
      alert('Something went wrong');
      this.router.navigate(['/login']);
    })
  }
  //refister
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{ 
      alert('Registration successfull');
      this.router.navigate(['/login']);
    },err =>{
      alert('Something went wrong');
      this.router.navigate(['/register']);

    })
  }
  //signout
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err =>{
      alert(err.message);  

    }) 
  }
}
