import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Hl7Message, Hl7Parser } from 'health-level-seven-parser';

import { NgRedux } from 'ng2-redux';
import { IAppState, INITIAL_STATE } from '../store';
import { COLLAPSE_ALL, EXPAND_ALL, SET_HL7_MESSAGE } from './hl7-editor.actions';
import { hl7EditorReducer } from './hl7-editor.reducer';

@Component({
  selector: 'hl7-editor',
  templateUrl: './hl7-editor.component.html',
  styleUrls: ['./hl7-editor.component.css']
})
export class Hl7EditorComponent implements OnInit {
  hl7Message: Hl7Message;

  constructor(public apiService: ApiService, private ngRedux:NgRedux<IAppState>) { 
      
  }

  ngOnInit() {
    let rawMessage = this.apiService.getHl7Message();
    let parser = new Hl7Parser();
    this.hl7Message = parser.getHl7Model(rawMessage, true);

    this.ngRedux.replaceReducer(hl7EditorReducer);

    this.ngRedux.dispatch({type: SET_HL7_MESSAGE, hl7Message: this.hl7Message});
  }

  //collapses hl7Message on all levels
  collapseAll(){
    this.ngRedux.dispatch({type: COLLAPSE_ALL})
  }

  //expands hl7Message on all levels
  expandAll(){
    this.ngRedux.dispatch({type: EXPAND_ALL})
  }
}
