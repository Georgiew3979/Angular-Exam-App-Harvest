import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {FieldsService} from '../../farming/services/fields.service'
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fields-manage',
  templateUrl: './fields-manage.component.html',
  styleUrls: ['./fields-manage.component.css']
})
export class FieldsManageComponent implements OnInit {
  p: number = 1;
  allFields: [{}]

  constructor(
    private fields: FieldsService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router : Router,
  ) { 
    this.toastr.setRootViewContainerRef(vcr);            
    this.fields.getAllFields().subscribe(
      data => {
        this.allFields = data
      },
      err => {

      }
    )
  }

  ngOnInit() {
  }

  deleteField(field){
    this.fields.deleteField(field._id).subscribe(
      data => {
        this.toastr.success(`The field ${field.name} was deleted.`, `It's done`)
        let index = this.allFields.indexOf(field, 0);
        if (index > -1)
        {
            this.allFields.splice(index, 1);
            
        }
      },
      err => {
        this.toastr.error(err.message, "Error")
      }
    )
  }

  updateField(field) {
    this.router.navigate(['/fieldUpdate/' + field['_id']])
  }
}
