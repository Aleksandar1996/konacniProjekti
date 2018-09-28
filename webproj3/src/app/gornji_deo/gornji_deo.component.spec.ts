import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GornjideoComponent } from './gornji_deo.component';

describe('GornjideoComponent', () => {
  let component: GornjideoComponent;
  let fixture: ComponentFixture<GornjideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GornjideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GornjideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
