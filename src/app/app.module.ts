import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { } from '../Auth.guard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastrModule } from 'ngx-toastr';
import "ngx-toastr/toastr";


import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoSelecionadoComponent } from './produtoSelecionado/produtoSelecionado.component';


const routes: Routes = [
  { path: 'produto', component: ProdutoComponent},
  { path: 'produtoSelecionado', component: ProdutoSelecionadoComponent },
  { path: '', redirectTo: localStorage.getItem('lastRoute') || '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoSelecionadoComponent,
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
