import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FieldsService } from '../../farming/services/fields.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { FieldModel } from '../../farming/models/fileld.model';

@Component({
  selector: 'app-field-update',
  templateUrl: './field-update.component.html',
  styleUrls: ['./field-update.component.css']
})
export class FieldUpdateComponent implements OnInit {

  public registeredCulture : string
  public registerSuccess : boolean
  public registerFail : boolean
  public model = new FieldModel('d','s', 0, 0, 0)
  targetId: string

  constructor(
    private fields: FieldsService,
    private router : Router,
    private route: ActivatedRoute,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
  ) { 
    this.toastr.setRootViewContainerRef(vcr);  
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.targetId = params['id']; // --> Name must match wanted parameter
    });
    this.fields.getFieldbyId(this.targetId).subscribe(
      data => {
        this.model = data
      },
      err => console.log(err)
    )
  }

  update(){
    this.fields.updateField(this.model).subscribe(
      data => {
        this.toastr.success(`The field ${data['name']} was updated.`, `It's done`)
          .then(() => 
              setTimeout(() => {
                this.router.navigate(['/fields/'])
            }, 2000)
          )
      
      },
      err => {
        this.toastr.error(err.message, "Error")
      }
    )
  }
}
