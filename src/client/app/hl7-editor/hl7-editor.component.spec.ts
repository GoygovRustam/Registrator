import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hl7EditorComponent } from './hl7-editor.component';

describe('Hl7EditorComponent', () => {
  let component: Hl7EditorComponent;
  let fixture: ComponentFixture<Hl7EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hl7EditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hl7EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
