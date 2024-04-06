import { Component, OnInit } from '@angular/core';
import { VolService } from '../../services/vol.service';
import { Vol } from '../../interfaces/vol';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vol-list',
  templateUrl: './vol-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule 
  ],
  styleUrls: ['./vol-list.component.css']
})
export class VolListComponent implements OnInit {
  displayedColumns: string[] = [
    'numvol',
    'pilote',
    'avion',
    'villedep',
    'villearr',
    'heuredep',
    'heurearr',
    'actions'
  ];
  dataSource = new MatTableDataSource<Vol>();

  constructor(private volService: VolService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.loadSortedVols();
  }

  loadSortedVols(): void {
    this.volService.getVols().subscribe(
      (vols: Vol[]) => {
        this.dataSource.data = vols;
      },
      (error) => {
        console.error('Error loading vols:', error);
      }
    );
  }

  edit(id: number): void {
    this.router.navigateByUrl('/employee/' + id);
  }

  delete(id: number): void {
    this.volService.deleteVol(id).subscribe(
      () => {
        this.toaster.success('Record deleted successfully');
        this.loadSortedVols(); // Recharger la liste après la suppression
      },
      (error) => {
        console.error('Error deleting vol:', error);
      }
    );
  }
}