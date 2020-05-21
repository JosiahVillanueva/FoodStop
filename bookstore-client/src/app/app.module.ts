import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginInterceptorService } from './login-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListBooksComponent,
    AddComponent,
    UpdateComponent, 
    DeleteComponent, 
    LoginComponent, 
    ErrorPageComponent, HomeComponent 
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
multi: true
 