import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: BookDashboardComponent, canActivate: [AuthGuardService]},
  { path: 'list/:id', component: BookDetailsComponent, canActivate: [AuthGuardService]},
  { path: 'add', component: BookAddComponent, canActivate: [AuthGuardService]},
  { path: 'update/:id', component: BookUpdateComponent, canActivate: [AuthGuardService]},
  { path: 'delete/:id', component: BookDeleteComponent, canActivate: [AuthGuardService]},
  { path: '**', component: ErrorPageComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
