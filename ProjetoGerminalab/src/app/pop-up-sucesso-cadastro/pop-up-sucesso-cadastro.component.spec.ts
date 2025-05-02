import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSucessoCadastroComponent } from './pop-up-sucesso-cadastro.component';

describe('PopUpSucessoLoginComponent', () => {
  let component: PopUpSucessoCadastroComponent;
  let fixture: ComponentFixture<PopUpSucessoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSucessoCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSucessoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
