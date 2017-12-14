import { NgModule } from '@angular/core';
import { UsersManageComponent } from './users-manage/users-manage.component';
import { FieldsManageComponent } from './fields-manage/fields-manage.component';
import { CulturesManageComponent } from './cultures-manage/cultures-manage.component';
import { UsersService } from './services/users/users-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoleNamePipe } from './services/roles-name.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CultureUpdateComponent } from './culture-update/culture-update.component';
import { FieldUpdateComponent } from './field-update/field-update.component';


// Modules

// Services

@NgModule({
  declarations: [ 
    UsersManageComponent,
    FieldsManageComponent,
    CulturesManageComponent,
    RoleNamePipe,
    CultureUpdateComponent,
    FieldUpdateComponent,
  ],
  imports: [ 
    CommonModule, 
    NgxPaginationModule,
    FormsModule
  ],
  exports: [ 
    RoleNamePipe
  ],
  providers: [ UsersService ]
})
export class UsersModule {  } 