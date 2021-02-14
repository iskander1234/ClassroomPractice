import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyComponent} from './my/my.component';
import {My2Component} from './my2/my2.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {ResultComponent} from './Result/result.component';
import {AddRecordComponent} from './AddRecord/addrecord.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ResultComponent,
    MyComponent,
    My2Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
