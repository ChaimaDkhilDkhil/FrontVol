import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilote } from '../../interfaces/pilote'; // Import de l'interface Pilote

@Component({
  selector: 'app-pilote-list',
  templateUrl: './pilote-list.component.html',
  styleUrls: ['./pilote-list.component.css']
})
export class PiloteListComponent implements OnInit {
  pilotes: Pilote[] = []; // Initialisation de la propriété pilotes à un tableau vide

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPilotes().subscribe(data => {
      this.pilotes = data;
    });
  }

  getPilotes(): Observable<Pilote[]> {
    return this.http.get<Pilote[]>('api/pilote'); 
  }
}
