import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
