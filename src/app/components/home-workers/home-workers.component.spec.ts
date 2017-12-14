import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkersComponent } from './home-workers.component';

describe('HomeWorkersComponent', () => {
  let component: HomeWorkersComponent;
  let fixture: ComponentFixture<HomeWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
