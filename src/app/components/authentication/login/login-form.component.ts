import { Component, ViewContainerRef } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';
import { FocusServiceService } from '../../services/focus-service/focus-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public model : LoginModel;
  public loginFail : boolean;
  public username : string;

  constructor(
    private authService : AuthenticationService,
    private router : Router,
    private focus: FocusServiceService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.model = new LoginModel("", "");
    this.username = "";
    this.toastr.setRootViewContainerRef(vcr);
  }

  login () : void {
    this.authService.login(this.model)
      .subscribe(
        data => {
          
          this.successfulLogin(data);
        },
        err => {
          this.toastr.error('This is not good!', 'Oops!');
          this.loginFail = true;
        }
      )
  }

  get diagnostics() : string {
    return JSON.stringify(this.model);
  }

  successfulLogin(data) : void {
    

    this.authService.authtoken =  data['_kmd']['authtoken']
    this.authService.roletoken =   data['_kmd']['roles'] ?  data['_kmd']['roles']['0']['roleId'] : ''

    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    localStorage.setItem('roleUser', data['_kmd']['roles'] ?  data['_kmd']['roles']['0']['roleId'] : '');
   
    this.focus.changingData({
      username: localStorage.getItem('username'),
      userRole: localStorage.getItem('roleUser')
    })

    this.loginFail = false;
    this.toastr.success('You are awesome!', 'Success!')
      .then(() => 
              setTimeout(() => {
                this.router.navigate(['/homeWorkers'])
            }, 1000)
      )
    
      
  }

}
