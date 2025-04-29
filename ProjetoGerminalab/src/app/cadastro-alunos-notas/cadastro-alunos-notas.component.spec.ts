import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlunosNotasComponent } from './cadastro-alunos-notas.component';

describe('CadastroAlunosNotasComponent', () => {
  let component: CadastroAlunosNotasComponent;
  let fixture: ComponentFixture<CadastroAlunosNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAlunosNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAlunosNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
