import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { FieldModel } from '../models/fileld.model';
import { CultureModel } from '../models/culture.model';

import { DataBaseService } from '../../services/db.sevice';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

const CURRENT_YEAR = 2018

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit {
  public model : FieldModel
  public culture: CultureModel
  public registeredField : string
  public registerSuccess : boolean
  public registerFail : boolean

  constructor(
    private dbService: DataBaseService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router : Router,
    
  ) {
    this.toastr.setRootViewContainerRef(vcr);            
    this.model = new FieldModel('', '', 0, 0, CURRENT_YEAR)
   }

  ngOnInit() {
  }

  register() : void {
    this.dbService.registerField(this.model)
      .subscribe(
        data => {
          
          this.successfulRegister(data);
        },
        err => {
          this.registerFail = true;
        }
      )
  }

  get diagnostics() : string {
    return JSON.stringify(this.model);
  }

  successfulRegister(data) : void {
    this.registerSuccess = true;
    this.registeredField = data;
    this.toastr.success('The field was successufly added', '')
    .then(() => 
        setTimeout(() => {
          this.router.navigate(['/homeWorkers'])
         
      }, 1000)
    )
    
  }
}


