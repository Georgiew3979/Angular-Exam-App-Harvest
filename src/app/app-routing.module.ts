import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './components/authentication/register/register-form.component';
import { LoginFormComponent } from './components/authentication/login/login-form.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { FieldFormComponent } from './components/farming/field-form/field-form.component'
import { CultureFormComponent } from './components/farming/culture-form/culture-form.component';

import { AuthGuard } from './components/guards/auth.guard.service'
import { RoleGuard } from './components/guards/role.guard.service'

import { FieldsListComponent } from './components/farming/fields-list/fields-list.component';
import { AddCultureComponent } from './components/farming/add-culture/add-culture.component';
import { HarvestFormComponent } from './components/farming/harvest-form/harvest-form.component';
import { UsersManageComponent } from './components/admin/users-manage/users-manage.component';
import { FieldsManageComponent } from './components/admin/fields-manage/fields-manage.component';
import { CulturesManageComponent } from './components/admin/cultures-manage/cultures-manage.component';
import { HomeWorkersComponent } from './components/home-workers/home-workers.component';
import { CultureUpdateComponent } from './components/admin/culture-update/culture-update.component';
import { FieldUpdateComponent } from './components/admin/field-update/field-update.component';
import { RemoveCultureComponent } from './components/farming/remove-culture/remove-culture.component';

//canActivate: [AuthGuard], canActivate: [RoleGuard],
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '[/]', component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'homeWorkers', component: HomeWorkersComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'registerField', canActivate: [AuthGuard], component: FieldFormComponent },  
  { path: 'registerCulture', canActivate: [AuthGuard], component: CultureFormComponent },  
  { path: 'addCulture/:id', canActivate: [AuthGuard], component: AddCultureComponent },  
  { path: 'removeCulture/:id', canActivate: [AuthGuard], component: RemoveCultureComponent },  // to do
  { path: 'makeHarvest/:id', canActivate: [AuthGuard],  component: HarvestFormComponent },  
  { path: 'users', canActivate: [RoleGuard], component: UsersManageComponent },  
  { path: 'fields', canActivate: [RoleGuard], component: FieldsManageComponent },  
  { path: 'cultures', canActivate: [RoleGuard], component: CulturesManageComponent },  
  { path: 'culturesUpdate/:id', canActivate: [RoleGuard], component: CultureUpdateComponent },  
  { path: 'fieldUpdate/:id', canActivate: [RoleGuard], component: FieldUpdateComponent },  
  
  
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

