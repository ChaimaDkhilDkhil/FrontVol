import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilote } from '../interfaces/pilote';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {

  private apiUrl = 'http://localhost:5295/api/pilote'; 

  constructor(private http: HttpClient) { }

  getPilotes(): Observable<Pilote[]> {
    return this.http.get<Pilote[]>(this.apiUrl);
  }

  getPiloteById(id: number): Observable<Pilote> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pilote>(url);
  }

  addPilote(pilote: Pilote): Observable<Pilote> {
    return this.http.post<Pilote>(this.apiUrl, pilote);
  }

  updatePilote(pilote: Pilote): Observable<Pilote> {
    const url = `${this.apiUrl}/${pilote.numpilote}`;
    return this.http.put<Pilote>(url, pilote);
  }

  deletePilote(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
