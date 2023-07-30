import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePageComponent } from './observable-page.component';

describe('ObservablePageComponent', () => {
  let component: ObservablePageComponent;
  let fixture: ComponentFixture<ObservablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablePageComponent]
    });
    fixture = TestBed.createComponent(ObservablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
