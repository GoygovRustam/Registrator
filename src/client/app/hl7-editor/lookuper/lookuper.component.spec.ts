import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookuperComponent } from './lookuper.component';

describe('LookuperComponent', () => {
  let component: LookuperComponent;
  let fixture: ComponentFixture<LookuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
