import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {CultureService} from '../../farming/services/culture/culture.service'
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cultures-manage',
  templateUrl: './cultures-manage.component.html',
  styleUrls: ['./cultures-manage.component.css']
})
export class CulturesManageComponent implements OnInit {
  p: number = 1;
  allCultures: [{}]

  constructor(
    private cultures: CultureService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router : Router,
  ) { 
    this.toastr.setRootViewContainerRef(vcr);            
    this.cultures.getAllCulture().subscribe(
      data => {
        this.allCultures = data
      },
      err => {

      }
    )
  }

  ngOnInit() {
  }

  deleteCulture(culture){
    this.cultures.deleteCulture(culture._id).subscribe(
      data => {
        this.toastr.success(`The culture ${culture.name} was deleted.`, `It's done`)
        let index = this.allCultures.indexOf(culture, 0);
        if (index > -1)
        {
            this.allCultures.splice(index, 1);
            
        }
      },
      err => {
        this.toastr.error(err.message, "Error")
      }
    )
  }

  updateCulture(culture) {
    this.router.navigate(['/culturesUpdate/' + culture['_id']])
  }
}
