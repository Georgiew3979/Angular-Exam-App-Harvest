import { Component, OnInit, Input } from '@angular/core';
import { CultureComponent } from '../culture/culture.component' 
import { AuthenticationService } from '../../authentication/auth.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() currentData: {}

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
