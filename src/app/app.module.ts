import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.development';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './admin/login/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    HttpClientModule,
    AdminModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true
    }),
    SweetAlert2Module.forRoot()


  ],
  providers: [
    {provide:'BASE_API_URL',useValue:environment.baseUrl},
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    [DatePipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
