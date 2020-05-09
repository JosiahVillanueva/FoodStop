import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'list/:id', component: ListBooksComponent, canActivate: [AuthGuardService]},
  { path: 'add', component: AddComponent, canActivate: [AuthGuardService]},
  { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuardService]},
  { path: 'delete/:id', component: DeleteComponent, canActivate: [AuthGuardService]},
  { path: '**', component: ErrorPageComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
