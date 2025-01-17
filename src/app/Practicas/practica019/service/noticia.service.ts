import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { }

  getNoticias(parametros:any):Observable<any>{
    const URL='https://newsapi.org/v2/top-headlines?country=' + parametros.pais + '&category=' + parametros.categoria + '&apiKey=c04d8e40dc614938998fdd1582755bf1'
    return this.http.get(URL);
  }
}
