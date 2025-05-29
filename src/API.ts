import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Produto} from './Class'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ConectProduto {
  private apiURL = 'http://localhost:3000/produtos/api';

  constructor(private http: HttpClient) { }

  GETallProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiURL);
  }

  GETprodutosSalvos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiURL}/salvos`);
  }

  // ✅ Salvar novo produto no MongoDB
  POSTsalvarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiURL}/salvar`, produto);
  }

  DELETEprodutoSalvo(id: number): Observable<any> {
        return this.http.delete(`${this.apiURL}/deletar/${id}`);
    }

};
