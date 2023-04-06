import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { NgxTableLibComponent } from './ngx-table-lib.component';
import {CommonModule} from "@angular/common";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    NgxTableLibComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
  ],
  providers: [NgxSpinnerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NgxTableLibComponent,
  ]
})
export class NgxTableLibModule { }
