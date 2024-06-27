import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastrModule } from 'ngx-toastr';
import "ngx-toastr/toastr";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { TesteComponent } from './teste/teste.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: localStorage.getItem('lastRoute') || '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
