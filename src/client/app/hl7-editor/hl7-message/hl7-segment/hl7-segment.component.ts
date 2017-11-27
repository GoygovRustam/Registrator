import { Component, Input, OnInit} from '@angular/core';
import { Segment } from 'health-level-seven-parser';

@Component({
  selector: 'hl7-segment',
  templateUrl: './hl7-segment.component.html',
  styleUrls: ['./hl7-segment.component.css']
})
export class Hl7SegmentComponent implements OnInit {
  @Input()
  hl7Segment:Segment;


  ngOnInit(){
  }
}
