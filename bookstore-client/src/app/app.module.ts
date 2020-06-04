import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
import { StoreDetailsComponent } from './book-details/store-details.component';
import { StoreAddComponent } from './store-add/store-add.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { StoreDeleteComponent } from './store-delete/store-delete.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginInterceptorService } from './login-interceptor.service';
import { TagDashboardComponent } from './tag-dashboard/tag-dashboard.component';
import { TagAddComponent } from './tag-add/tag-add.component';
import { TagUpdateComponent } from './tag-update/tag-update.component';
import { TagDeleteComponent } from './tag-delete/tag-delete.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreDashboardComponent,
    StoreDetailsComponent,
    StoreAddComponent,
    StoreUpdateComponent, 
    StoreDeleteComponent, 
    LoginComponent, 
    ErrorPageComponent, 
    HomeComponent, 
    TagDashboardComponent, 
    TagAddComponent, 
    TagUpdateComponent, 
    TagDeleteComponent, 
    RegisterComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptorService,
    multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 