import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { IndexedDbService } from './indexeddb.service';
import { MaterialModule } from './Material.Module';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNameComponent } from './add-name/add-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SnackbarService } from './snackbar.service';
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
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [IndexedDbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
