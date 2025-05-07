import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRemoverAlunoComponent } from './editar-remover-aluno.component';

describe('EditarRemoverAlunoComponent', () => {
  let component: EditarRemoverAlunoComponent;
  let fixture: ComponentFixture<EditarRemoverAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarRemoverAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRemoverAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
