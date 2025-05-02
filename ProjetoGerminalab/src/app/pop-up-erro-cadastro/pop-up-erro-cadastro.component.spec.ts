import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpErroCadastroComponent } from './pop-up-erro-cadastro.component';

describe('PopUpErroCadastroComponent', () => {
  let component: PopUpErroCadastroComponent;
  let fixture: ComponentFixture<PopUpErroCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpErroCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpErroCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
