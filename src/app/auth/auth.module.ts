import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth.routing';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './services/session.service';





@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
    
  ],
  providers: [SessionService],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
