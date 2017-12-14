import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldsService } from '../services/fields.service';
import { FieldModel } from '../models/fileld.model';
import { HarvestModel } from '../models/harvest.model';
import { ToastsManager } from 'ng2-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-harvest-form',
  templateUrl: './harvest-form.component.html',
  styleUrls: ['./harvest-form.component.css']
})
export class HarvestFormComponent implements OnInit {
  fieldIdForUpgrade: string
  isSelectedCulture: boolean = false
  selectedTargetOnFocus: {}
  selectedName: string
  public registerSuccess: boolean;
  public registerFail: boolean;
  fieldData= new FieldModel ('', '', 0, 0, 0)
  public model = new HarvestModel('','', new Date(Date.now()),0)

  constructor(
    private route: ActivatedRoute,
    private filedService: FieldsService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private _location: Location
  ) {
    this.toastr.setRootViewContainerRef(vcr);            
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fieldIdForUpgrade = params['id']; // --> Name must match wanted parameter
    });
    this.getFieldData()
    this.toastr.info('Select the culture to harvest', '')
  }

  getFieldData() {
    this.filedService.getFieldbyId(this.fieldIdForUpgrade)
      .subscribe(
      data => {
        this.fieldData = data
      },
      err => {
        console.log(err)
      })
  }

  selectData(culture) {
    this.isSelectedCulture = true
    this.selectedTargetOnFocus = culture
    this.selectedName = culture.name + ' ---> ' + culture.type
  }


  harvestCultureInFeild() {
    this.fieldData['agroCulture']
    .filter(x => x._id === this.selectedTargetOnFocus['_id'])[0]['crop'] += this.model.quantity

    this.filedService.updateField(this.fieldData)
      .subscribe(
      data => {
        this.toastr.success('The culture was successfuly harvested', '')
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

  successfulRegister(data): void {
    this.registerSuccess = true;
    this.isSelectedCulture = false
    //todo redirect to main
    this._location.back()
  }
}
