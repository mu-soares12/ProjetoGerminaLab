import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSucessoLoginComponent } from './pop-up-sucesso-login.component';

describe('PopUpSucessoLoginComponent', () => {
  let component: PopUpSucessoLoginComponent;
  let fixture: ComponentFixture<PopUpSucessoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSucessoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSucessoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
