import { Component, OnInit } from '@angular/core';
import { AvionService } from '../../services/avion.service';
import { Avion } from '../../interfaces/avion';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-avion-list',
  templateUrl: './avion-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule 
  ],
  styleUrls: ['./avion-list.component.css']
})
export class AvionListComponent implements OnInit {
  avions: Avion[] = []; // Initialisation de la propriété avions

  displayedColumns: string[] = ['numavion', 'nomavion', 'capacite', 'localisation', 'actions'];

  constructor(private avionService: AvionService) { }

  ngOnInit() {
    this.getAvions();
  }

  getAvions(): void {
    this.avionService.getAvions()
      .subscribe(avions => this.avions = avions);
  }
}