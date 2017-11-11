import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hl7MessageComponent } from './hl7-message.component';

describe('Hl7MessageComponent', () => {
  let component: Hl7MessageComponent;
  let fixture: ComponentFixture<Hl7MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hl7MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hl7MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
