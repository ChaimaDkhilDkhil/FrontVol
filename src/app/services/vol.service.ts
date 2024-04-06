import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vol } from '../interfaces/vol';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  private baseUrl = 'http://localhost:5280/api/vol-list';

  constructor(private http: HttpClient) { }

  getVols(): Observable<Vol[]> {
    return this.http.get<Vol[]>(this.baseUrl);
  }

  getVol(id: number): Observable<Vol> {
    return this.http.get<Vol>(`${this.baseUrl}/${id}`);
  }

  createVol(vol: Vol): Observable<Vol> {
    return this.http.post<Vol>(this.baseUrl, vol);
  }

  updateVol(id: number, vol: Vol): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, vol);
  }

  deleteVol(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
