import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioGerminareComponent } from './laboratorio-germinare.component';

describe('LaboratorioGerminareComponent', () => {
  let component: LaboratorioGerminareComponent;
  let fixture: ComponentFixture<LaboratorioGerminareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratorioGerminareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratorioGerminareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
