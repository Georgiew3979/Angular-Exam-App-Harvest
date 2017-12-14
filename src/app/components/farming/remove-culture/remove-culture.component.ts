import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldsService } from '../services/fields.service';
import { FieldModel } from '../models/fileld.model';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-remove-culture',
  templateUrl: './remove-culture.component.html',
  styleUrls: ['./remove-culture.component.css']
})
export class RemoveCultureComponent implements OnInit {
  fieldIdForUpgrade: string
  isSelectedCulture: boolean = false
  selectedTargetOnFocus: {}
  selectedName: string
  public registerSuccess: boolean;
  public registerFail: boolean;
  fieldData= new FieldModel ('', '', 0, 0, 0, [{}])

  constructor(
    private route: ActivatedRoute,
    private filedService: FieldsService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router : Router,
  ) {
    this.toastr.setRootViewContainerRef(vcr);        
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fieldIdForUpgrade = params['id']; // --> Name must match wanted parameter
    });
    this.getFieldData()
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


  removeCultureFromFeild() {
    
    
    let index = this.fieldData['agroCulture'].indexOf(this.selectedTargetOnFocus,0)
   
    if (index > -1)
    {
      this.fieldData['agroCulture'].splice(index, 1);
        
    }
    this.filedService.updateField(this.fieldData)
      .subscribe(
      data => {
        this.toastr.success('The culture was removed from field', '')
        .then(() => 
          setTimeout(() => {
            this.router.navigate(['/homeWorkers'])
          }, 1000)
        )
        
      },
      err => {
        this.registerFail = true;
      }
      )
 
  }

  
}
