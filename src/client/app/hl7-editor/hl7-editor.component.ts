import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Hl7Message, DefinitionBuilder, Hl7Parser,  Version } from 'health-level-seven-parser';


@Component({
  selector: 'hl7-editor',
  templateUrl: './hl7-editor.component.html',
  styleUrls: ['./hl7-editor.component.css']
})
export class Hl7EditorComponent implements OnInit {
  hl7Message: Hl7Message;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    let rawMessage = this.apiService.getHl7Message();
    let parser = new Hl7Parser();
    this.hl7Message = parser.getHl7Model(rawMessage);

    let defBuilder = new DefinitionBuilder(Version.v2_1);

    defBuilder.addDefinitionToHl7Message(this.hl7Message);
  }

}
