import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MaterialModule } from './material.module';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { SpacerDirective } from './directives/spacer.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    LeftComponent,
    RightComponent,
    SpacerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
