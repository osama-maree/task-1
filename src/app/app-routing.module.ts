import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddNameComponent } from './add-name/add-name.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: TableComponent,
    title: 'Task -Names Grid',
  },
  { path: 'add', component: AddNameComponent, title: 'Task -Add Name' },
  { path: '**', component: PageNotFoundComponent, title: 'Task -404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
