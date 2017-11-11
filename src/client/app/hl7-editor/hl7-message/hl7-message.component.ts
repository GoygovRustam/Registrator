import { Component, Input } from '@angular/core';
import { Hl7Message } from 'health-level-seven-parser';

@Component({
  selector: 'hl7-message',
  templateUrl: './hl7-message.component.html',
  styleUrls: ['./hl7-message.component.css']
})
export class Hl7MessageComponent{
  @Input()
  hl7Message:Hl7Message;
  
}
