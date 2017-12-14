import { Pipe, PipeTransform } from '@angular/core';
import { adminRoleId, workerRoleId} from '../../constants/constants'
const ROLE_NAME = ['admin', 'worker', 'guest'];

@Pipe({
  name: 'formatRoleIdToText'
})
export class RoleNamePipe implements PipeTransform {
  transform(roleId: string): string {
    switch(roleId) {
      case(adminRoleId):
        return ROLE_NAME[0]
      case(workerRoleId):
        return ROLE_NAME[1]  
      default:
        return ROLE_NAME[2] 
    }
  }
}