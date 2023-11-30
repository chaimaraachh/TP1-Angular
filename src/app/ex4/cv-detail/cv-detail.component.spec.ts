import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDetailComponent } from './cv-detail.component';

describe('CdDetailComponent', () => {
  let component: CdDetailComponent;
  let fixture: ComponentFixture<CdDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdDetailComponent]
    });
    fixture = TestBed.createComponent(CdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
