import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterpreteComponent } from './admin-interprete.component';

describe('AdminInterpreteComponent', () => {
  let component: AdminInterpreteComponent;
  let fixture: ComponentFixture<AdminInterpreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInterpreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInterpreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
