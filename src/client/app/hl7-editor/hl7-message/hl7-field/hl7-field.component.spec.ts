import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hl7FieldComponent } from './hl7-field.component';

describe('Hl7FieldComponent', () => {
  let component: Hl7FieldComponent;
  let fixture: ComponentFixture<Hl7FieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hl7FieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hl7FieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
