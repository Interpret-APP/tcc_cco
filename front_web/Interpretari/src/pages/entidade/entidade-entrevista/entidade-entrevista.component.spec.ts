import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadeEntrevistaComponent } from './entidade-entrevista.component';

describe('EntidadeEntrevistaComponent', () => {
  let component: EntidadeEntrevistaComponent;
  let fixture: ComponentFixture<EntidadeEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadeEntrevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadeEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
