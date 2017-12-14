import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './components/admin/users.module';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Module
import { AuthenticationModule } from './components/authentication/auth.module'
import { FarmingModule } from './components/farming/farming.module'

//Components
import { AppComponent } from './app.component';
import  { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component'
import { FooterComponent } from './components/shared/footer/footer.component'
import { HomeWorkersComponent } from './components/home-workers/home-workers.component';


//Providers
import { AuthGuard } from './components/guards/auth.guard.service';
import { RoleGuard } from './components/guards/role.guard.service';

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeWorkersComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    FarmingModule,
    UsersModule,
    HttpClientModule,
    NgHttpLoaderModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
