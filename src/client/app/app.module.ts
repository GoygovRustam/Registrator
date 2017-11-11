import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Hl7EditorComponent } from './hl7-editor/hl7-editor.component';
import { ApiService } from './services/api.service';
import { Hl7MessageComponent } from './hl7-editor/hl7-message/hl7-message.component';
import { Hl7SegmentComponent } from './hl7-editor/hl7-message/hl7-segment/hl7-segment.component';
import { Hl7FieldComponent } from './hl7-editor/hl7-message/hl7-field/hl7-field.component';

@NgModule({
  declarations: [
    AppComponent,
    Hl7EditorComponent,
    Hl7MessageComponent,
    Hl7SegmentComponent,
    Hl7FieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
