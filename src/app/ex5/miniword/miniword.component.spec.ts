import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniwordComponent } from './miniword.component';

describe('MiniwordComponent', () => {
  let component: MiniwordComponent;
  let fixture: ComponentFixture<MiniwordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniwordComponent]
    });
    fixture = TestBed.createComponent(MiniwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
