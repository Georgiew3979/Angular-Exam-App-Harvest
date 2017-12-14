import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Location} from '@angular/common';

import { CultureModel } from '../models/culture.model';
import { DataBaseService } from '../../services/db.sevice';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-culture-form',
  templateUrl: './culture-form.component.html',
  styleUrls: ['./culture-form.component.css']
})
export class CultureFormComponent implements OnInit {
  public model : CultureModel
  public registeredCulture : string
  public registerSuccess : boolean
  public registerFail : boolean
  constructor(
    private dbService: DataBaseService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private _location: Location
  ) { 
    this.toastr.setRootViewContainerRef(vcr);            
    this.model = new CultureModel('', '', '', 0, '', [''])
  }

  ngOnInit() {
  }

  register() : void {
    this.model.name = this.model.name.toLowerCase()
    this.dbService.registerCulture(this.model)
      .subscribe(
        data => {
          this.toastr.success('The culture was successfuly added', '')
          .then(() => 
            setTimeout(() => {
              this.successfulRegister(data);
            
            }, 1000)
          )
         
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
    this.registeredCulture = data;
    this._location.back()
  }
}
