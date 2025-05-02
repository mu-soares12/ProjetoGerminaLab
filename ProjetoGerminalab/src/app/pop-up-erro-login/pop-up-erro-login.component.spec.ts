import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpErroLoginComponent } from './pop-up-erro-login.component';

describe('PopUpErroLoginComponent', () => {
  let component: PopUpErroLoginComponent;
  let fixture: ComponentFixture<PopUpErroLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpErroLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpErroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
