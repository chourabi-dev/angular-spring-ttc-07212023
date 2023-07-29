import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroPageComponent } from './erro-page.component';

describe('ErroPageComponent', () => {
  let component: ErroPageComponent;
  let fixture: ComponentFixture<ErroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroPageComponent]
    });
    fixture = TestBed.createComponent(ErroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
