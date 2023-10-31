import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User, Product } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseURL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  //! -------------  LOGGIN  -------------
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }

  public getUserToAuth(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
  }


  //! -------------  PRODUCTS  -------------
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/productos`);
  }

  public addProduct(product: Product): Observable<boolean> {

    const url = `${this.baseURL}/productos`;
    return this.http.post<boolean>(url, product);
  }

  public deleteProduct(id: number): Observable<boolean> {

    const url = `${this.baseURL}/productos/${id}`;

    return this.http.delete<boolean>(url).pipe(
      map(resp => true),

      catchError(error => of(false))
    );
  }

  public updateProduct(product: Product): Observable<boolean> {
    const url = `${this.baseURL}/productos/${product.id}`;
    return this.http.patch<boolean>(url, product);
  }

}
