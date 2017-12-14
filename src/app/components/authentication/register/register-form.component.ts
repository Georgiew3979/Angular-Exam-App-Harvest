import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  public userId: string;
  public userEmail: string;
  public errorMessage: string;
  public stepOne: boolean = true;
  public error: boolean = false;
  public isError: boolean = false;
  public registeredUser: string

  public userToRegister: FormGroup;

  constructor(
    public fb: FormBuilder,
      public authService: AuthenticationService,
      public router: Router,
      public toastr: ToastsManager,
      vcr: ViewContainerRef
    ) {
      this.toastr.setRootViewContainerRef(vcr);      
  }

  ngOnInit() {
      this.userToRegister = this.fb.group({
          'username': ['', Validators.required],
          'email': ['', Validators.required],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
          'confirmedPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }
  register() : void {

    this.authService.register(this.userToRegister.value)
      .subscribe(
        data => {
            this.successfulRegister(data);
        },
        err => {
          this.toastr.error('This is not good!', 'Oops!');
          
        }
      )
  }

  successfulRegister(data) : void {
    this.registeredUser = data['username'];

    this.toastr.success('Now you are registred! Please log in!', 'Success!')
    .then(() => 
            setTimeout(() => {
              this.router.navigate(['/login'])
          }, 3000)
    )
  }

}
