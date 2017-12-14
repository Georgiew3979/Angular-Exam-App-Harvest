import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CultureService } from '../services/culture/culture.service'
import { FieldsService } from '../services/fields.service'
import { FieldModel } from '../models/fileld.model'
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-culture',
  templateUrl: './add-culture.component.html',
  styleUrls: ['./add-culture.component.css']
})
export class AddCultureComponent implements OnInit {
  p: number = 1;
  cultureData: {}
  targetName = new Subject<any>()
  isSelectedCulture: boolean = false
  selectedTargetOnFocus: {}
  selectedName: string
  fieldForUpgrade: string
  fieldData: FieldModel
  public registerSuccess : boolean;
  public registerFail : boolean;

  constructor(
    private culturesServices: CultureService,
    private route: ActivatedRoute,
    private filedService: FieldsService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router : Router,
  ) { 
    this.toastr.setRootViewContainerRef(vcr);    
    this.culturesServices.searchCulture(this.targetName)
    .subscribe(
      data => {
        this.isSelectedCulture = false
        this.cultureData = data    
      },
      err => {
        console.log(err)
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fieldForUpgrade = params['id']; // --> Name must match wanted parameter
    });
    this.toastr.info("Type string to dislpay cultures",'')
  }

  cultureSearchString(e) {
    this.targetName.next(e.target.value)
  }

  selectData(culture) {
    this.isSelectedCulture = true
    this.selectedTargetOnFocus = culture
    this.selectedName = culture.name + ' ---> ' + culture.type
  }

  addCultureToFeild(){
    this.filedService.getFieldbyId(this.fieldForUpgrade)
      .subscribe( 
        data => {
          this.fieldData = data
          if(!this.fieldData.agroCulture) {
            this.fieldData.agroCulture = [{}]
            this.fieldData.agroCulture[0] = this.selectedTargetOnFocus
          } else {
            this.fieldData.agroCulture.push(this.selectedTargetOnFocus)
          }

          this.filedService.updateField(this.fieldData)
            .subscribe( 
              data => {
                this.successfulRegister(data);
              },
              err => {
                this.registerFail = true;
              }
            )
        },
      err => {
        this.showError()
        console.log(err)
      })
     
     
  }

  successfulRegister(data) : void {
    this.registerSuccess = true;
    this.isSelectedCulture = false
    this.showSuccess()
    
  }

  showSuccess() {
    this.toastr.success('The was added to field', "It'OK")
    .then(() => 
      setTimeout(() => {
        this.router.navigate(['/homeWorkers'])
      
      }, 1000)
    )
    
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }
}


