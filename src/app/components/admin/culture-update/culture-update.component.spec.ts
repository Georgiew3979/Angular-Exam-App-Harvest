import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureUpdateComponent } from './culture-update.component';

describe('CultureUpdateComponent', () => {
  let component: CultureUpdateComponent;
  let fixture: ComponentFixture<CultureUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
