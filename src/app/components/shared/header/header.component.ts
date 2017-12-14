import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/auth.service'
import { FocusServiceService } from '../../services/focus-service/focus-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string
  userRole: string

  constructor(
    private authService : AuthenticationService,
    private focus: FocusServiceService
  ) {
    this.focus.receiveElement.subscribe(
      data => {
        this.username = data.username
        this.userRole = data.userRole
      })
   }

  ngOnInit() {
    
  }

}
