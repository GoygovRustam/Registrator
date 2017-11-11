import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hl7SegmentComponent } from './hl7-segment.component';

describe('Hl7SegmentComponent', () => {
  let component: Hl7SegmentComponent;
  let fixture: ComponentFixture<Hl7SegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hl7SegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hl7SegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
