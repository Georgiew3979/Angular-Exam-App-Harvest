import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturesManageComponent } from './cultures-manage.component';

describe('CulturesManageComponent', () => {
  let component: CulturesManageComponent;
  let fixture: ComponentFixture<CulturesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
