import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginInterceptorService } from './login-interceptor.service';
import { TagDashboardComponent } from './tag-dashboard/tag-dashboard.component';
import { TagAddComponent } from './tag-add/tag-add.component';
import { TagUpdateComponent } from './tag-update/tag-update.component';
import { TagDeleteComponent } from './tag-delete/tag-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDashboardComponent,
    BookDetailsComponent,
    BookAddComponent,
    BookUpdateComponent, 
    BookDeleteComponent, 
    LoginComponent, 
    ErrorPageComponent, 
    HomeComponent, TagDashboardComponent, TagAddComponent, TagUpdateComponent, TagDeleteComponent, 
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
 