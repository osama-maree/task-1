import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { MaterialModule } from './Material.Module';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNameComponent } from './add-name/add-name.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    AddNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
