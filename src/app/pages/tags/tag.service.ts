import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private apiUrl = 'https://api.alikayablog.com.tr/api/Tag/GetAllTags'
  constructor(private http: HttpClient) { }

  getAllTags(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl);
  }
}
