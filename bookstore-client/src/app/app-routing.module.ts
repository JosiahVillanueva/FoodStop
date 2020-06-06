import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreAddComponent } from './store-add/store-add.component';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { StoreDeleteComponent } from './store-delete/store-delete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { TagDashboardComponent } from './tag-dashboard/tag-dashboard.component';
import { TagAddComponent } from './tag-add/tag-add.component';
import { TagUpdateComponent } from './tag-update/tag-update.component';
import { TagDeleteComponent } from './tag-delete/tag-delete.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tag', component: TagDashboardComponent, canActivate: [AuthGuardService]},
  { path: 'tag/add', component: TagAddComponent, canActivate: [AuthGuardService]},
  { path: 'tag/update/:id', component: TagUpdateComponent, canActivate: [AuthGuardService]},
  { path: 'tag/delete/:id', component: TagDeleteComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard', component: StoreDashboardComponent, canActivate: [AuthGuardService]},
  { path: 'list/:id', component: StoreDetailsComponent, canActivate: [AuthGuardService]},
  { path: 'add', component: StoreAddComponent, canActivate: [AuthGuardService]},
  { path: 'update/:id', component: StoreUpdateComponent, canActivate: [AuthGuardService]},
  { path: 'delete/:id', component: StoreDeleteComponent, canActivate: [AuthGuardService]},
  { path: '**', component: ErrorPageComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
