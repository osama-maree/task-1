import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule {}
