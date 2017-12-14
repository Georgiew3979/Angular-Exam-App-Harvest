import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCultureComponent } from './harvest-form.component';

describe('HarvestFormComponent', () => {
  let component: RemoveCultureComponent;
  let fixture: ComponentFixture<RemoveCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
