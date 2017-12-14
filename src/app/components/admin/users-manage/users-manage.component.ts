import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsersService } from '../services/users/users-service';
import { AuthenticationService } from "../../authentication/auth.service"
import { workerRoleId } from '../../constants/constants';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.css']
})
export class UsersManageComponent implements OnInit {
  p: number = 1;
  allUsers: [{}]
  constructor(
    private users: UsersService,
    private authService: AuthenticationService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vcr);        
    this.users.getAllUsers().subscribe(
      data => {
        this.allUsers = data.filter(x => !x['_kmd']['status'])
      },
      err => {
        console.log(err)
      }
    )
   }

  ngOnInit() {
  }

  deleteUser(user) {
    this.users.deleteUser(user._id).subscribe(
      data => {
        this.toastr.success(`The used ${user.username} was deleted.`, `It's done`)
        let index = this.allUsers.indexOf(user, 0);
        if (index > -1)
        {
            this.allUsers.splice(index, 1);
            
        }
      },
      err => {
        this.toastr.error(err.message, "Error")
      }
    )
  }

  setUserToWorker(userId) {
    
   
    
   this.authService.grantRole(userId, workerRoleId).subscribe(
     data => {
       this.toastr.success(`The used with ${userId} was granted to Worker.`, `It's done`)  
      
       this.allUsers.filter(x => x['_id'] === userId)[0]['_kmd']['roles'] = [{roleId:workerRoleId}]

     },
     err => {
       this.toastr.error(err.message, "Error")        
     })
  }
}
