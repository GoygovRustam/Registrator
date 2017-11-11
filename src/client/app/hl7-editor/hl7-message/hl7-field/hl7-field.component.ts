import { Component, Input } from '@angular/core';
import { Field } from 'health-level-seven-parser';

@Component({
  selector: 'hl7-field',
  templateUrl: './hl7-field.component.html',
  styleUrls: ['./hl7-field.component.css']
})
export class Hl7FieldComponent{
  @Input()
  hl7Field:Field;
}
