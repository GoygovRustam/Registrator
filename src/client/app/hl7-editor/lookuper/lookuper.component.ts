import { Component, OnInit, Input } from '@angular/core';
import { Hl7Message } from 'health-level-seven-parser';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'lookuper',
  templateUrl: './lookuper.component.html',
  styleUrls: ['./lookuper.component.css']
})
export class LookuperComponent implements OnInit {
  @Input()
  hl7Message:Hl7Message;

  myControl: FormControl = new FormControl();

  filteredOptions: Observable<any[]>;
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
        .startWith('')
        .map(val => this.filter(val));
  }
  
  filter(val: string){
    return this.dictionary.filter(element =>
      element.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  dictionary = [
    {name: "Date/Time of Message" , value: "MSH-7"},
    {name: "Message Control Id" , value: "MSH-10"}
  ]

  goToField(value:string){
    if(!value) return;

    let segmentName = value.substr(0,3);

    let fieldIndex = value.substr(4,1);


    let segment:any = this.hl7Message.children.find(x => 
        x.name.toLowerCase() === segmentName.toLowerCase()
    );

    segment.expanded = true;
    segment.children[fieldIndex].expanded = true;
  }

}
