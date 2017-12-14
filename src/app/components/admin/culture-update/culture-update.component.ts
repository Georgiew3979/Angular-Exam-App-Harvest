import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { CultureModel } from '../../farming/models/culture.model';
import { CultureService } from '../../farming/services/culture/culture.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-culture-update',
  templateUrl: './culture-update.component.html',
  styleUrls: ['./culture-update.component.css']
})
export class CultureUpdateComponent implements OnInit {
  
  public registeredCulture : string
  public registerSuccess : boolean
  public registerFail : boolean
  public model = new CultureModel('d','s',"")
  targetId: string

  constructor(
    private cultures: CultureService,
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
    this.cultures.getCulturebyId(this.targetId).subscribe(
      data => {
        this.model = data
      },
      err => console.log(err)
    )
  }

  successfulRegister(data) : void {
    this.registerSuccess = true;
    this.registeredCulture = data;
  }

  update(){
    this.cultures.updateCulture(this.targetId, this.model).subscribe(
      data => {
        this.toastr.success(`The culture ${data['name']} was updated.`, `It's done`)
        .then(() => 
            setTimeout(() => {
              this.router.navigate(['/cultures/'])
          }, 1000)
        )
      
      },
      err => {
        this.toastr.error(err.message, "Error")
      }
    )
  }
}
