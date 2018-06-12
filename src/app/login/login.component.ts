import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../shared/service/servicename.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { FacebookAuthProvider } from '@firebase/auth-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:string;
  password:string;

  phoneNumber: string;
  _recap: firebase.auth.RecaptchaVerifier;
  otp: string;

  constructor(
    private _service: ServicenameService,
    private _auth: AngularFireAuth
  ) { 
    
  }

  testData(){
    this.userId = 'admin'
    this.password = '1234'

    this._service.loadProject().subscribe( (resp) => {
      console.log(resp);
    });
  }

  onToggle(_event){
    console.log(_event);
  }

  onSubmit(loginForm){
    if(loginForm.valid){
      const data = loginForm.value;
      // this._service.doLogin(data).subscribe( (resp) =>{
      //   console.log(resp);
      // });
      this._auth.auth.signInWithEmailAndPassword(
        data.userId, data.password
      ).then( (resp) => {
        console.log("success", resp)
      }).catch( (err) => {
        console.log("error on ", err)
      });
    }else{ 
      alert("Please input all field");
    }

    // this._auth.auth.createUserWithEmailAndPassword("", "")
  }

  onGoogleSignIn() {
    this._auth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider() );
  }

  onFacebookSignIn() {
    this._auth.auth.signInWithRedirect( new firebase.auth.FacebookAuthProvider() );
  }

  onTwitterSignIn() {
    this._auth.auth.signInWithRedirect( new firebase.auth.TwitterAuthProvider() );
  }

  onGithubSignIn() {
    this._auth.auth.signInWithRedirect( new firebase.auth.GithubAuthProvider() );
  }

  ngOnInit() {
    this._recap = new firebase.auth.RecaptchaVerifier('recapt-id');
    this._recap.render().then(function(widgetId) {
      window["recaptchaWidgetId"] = widgetId;
    });
  }
  
  onRequestOtp(){
    this._auth.auth.signInWithPhoneNumber(
      `+66${this.phoneNumber}`, this._recap
    ).then((confirmationResult)=>{
      window["confirmationResult"] = confirmationResult;
    }).catch((err)=>{
      console.log(err)
    })
  }

  onConfirmOpt(){
    window["confirmationResult"].confirm(this.otp).then((resp) =>{
      console.log(resp);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
