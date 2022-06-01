import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeHomeComponent } from './entidade-home.component';

describe('EntidadeHomeComponent', () => {
  let component: EntidadeHomeComponent;
  let fixture: ComponentFixture<EntidadeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
