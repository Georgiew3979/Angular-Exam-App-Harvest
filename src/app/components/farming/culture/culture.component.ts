import { Component, OnInit, Input } from '@angular/core';
import { CultureService } from '../services/culture/culture.service'


@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {
  @Input() currentCulture: {}
  @Input() isAddCulture: boolean = false

  constructor( ) {  }

  ngOnInit() {
  }

}
