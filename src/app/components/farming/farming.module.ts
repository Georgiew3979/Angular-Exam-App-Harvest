import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

import { FieldFormComponent } from  './field-form/field-form.component';
import { FieldComponent } from './field/field.component';
import { CultureComponent } from './culture/culture.component';
import { CultureFormComponent } from './culture-form/culture-form.component';
import { FieldsListComponent } from './fields-list/fields-list.component';
import { AddCultureComponent } from './add-culture/add-culture.component';
import { HarvestFormComponent } from './harvest-form/harvest-form.component';
import { RemoveCultureComponent } from './remove-culture/remove-culture.component';

// Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; 

// Services
import { DataBaseService } from '../services/db.sevice';
import { FieldsService } from './services/fields.service';
import { CultureService } from './services/culture/culture.service';
import { FocusServiceService } from '../services/focus-service/focus-service.service';


@NgModule({
  declarations: [ 
    FieldComponent,
    CultureComponent,
    FieldFormComponent,
    CultureFormComponent,
    FieldsListComponent,
    AddCultureComponent,
    HarvestFormComponent,
    RemoveCultureComponent
  ],
  imports: [ 
    CommonModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  exports: [ 
    FieldComponent,
    CultureComponent,
    FieldFormComponent,
    FieldsListComponent,
    CultureFormComponent,
  ],
  providers: [ 
    DataBaseService,
    FieldsService,
    CultureService,
    FocusServiceService
   ]
})
export class FarmingModule {  } 