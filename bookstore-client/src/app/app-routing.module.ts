import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'list/:title', component: ListBooksComponent},
  { path: 'add', component: AddComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'delete/:id', component: DeleteComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
