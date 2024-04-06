import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avion } from '../interfaces/avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  apiUrl = 'http://localhost:5295/api/avion';

  constructor(private http: HttpClient) { }

  getAvions(): Observable<Avion[]> {
    return this.http.get<Avion[]>(this.apiUrl);
  }

  getAvionById(id: number): Observable<Avion> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Avion>(url);
  }

  addAvion(avion: Avion): Observable<Avion> {
    return this.http.post<Avion>(this.apiUrl, avion);
  }

  updateAvion(avion: Avion): Observable<any> {
    const url = `${this.apiUrl}/${avion.numavion}`;
    return this.http.put<any>(url, avion);
  }

  deleteAvion(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
