import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'https://api.alikayablog.com.tr/api';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/Article/GetAllArticles`);
  }
  softDeleteArticle(articleId: number): Observable<any> {
    const requestBody = { id: articleId };
    console.log(requestBody)
    return this.http.post<any>(`${this.baseUrl}/Article/DeleteArticle`, requestBody);
  }
}
