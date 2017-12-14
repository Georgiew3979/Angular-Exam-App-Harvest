import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../services/fields.service'
import { AuthenticationService } from '../../authentication/auth.service';

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.css']
})
export class FieldsListComponent implements OnInit {
  p: number = 1;
  fieldsDataLeft: {}

  constructor( 
    public fieldsServices: FieldsService,
    public authService: AuthenticationService
  ) { 
    this.fieldsServices.getAllFields()
    .subscribe(
      data => {
        this.fieldsDataLeft = data.sort((a,b) =>{
          let aa = new Date(a['_kmd']['ect'])
          let bb = new Date(b['_kmd']['ect'])
          
          return aa>bb ? -1 : aa<bb ? 1 : 0;
        })
      },
      err => {
        console.log(err)
        
      })
  }

  ngOnInit() {
    
  }

}
