import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtComponent } from './eidt.component';

describe('EidtComponent', () => {
  let component: EidtComponent;
  let fixture: ComponentFixture<EidtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EidtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
