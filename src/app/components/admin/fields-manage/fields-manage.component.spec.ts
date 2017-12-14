import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsManageComponent } from './fields-manage.component';

describe('FieldsManageComponent', () => {
  let component: FieldsManageComponent;
  let fixture: ComponentFixture<FieldsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
