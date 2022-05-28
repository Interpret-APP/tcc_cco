import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudiciariaComponent } from './judiciaria.component';

describe('JudiciariaComponent', () => {
  let component: JudiciariaComponent;
  let fixture: ComponentFixture<JudiciariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudiciariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudiciariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
