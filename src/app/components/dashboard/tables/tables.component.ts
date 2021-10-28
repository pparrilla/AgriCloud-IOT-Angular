import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sensor } from 'src/app/interfaces/sensor';
import { MeasuresService } from 'src/app/services/measures.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  sensors: Sensor[] = [];

  displayedColumns: string[] = ['device_id', 'value', 'timestamp'];
  dataSource = new MatTableDataSource(this.sensors);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _measuresService: MeasuresService) { }

  ngOnInit(): void {
      this.getMeasures("temperature");
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMeasures(type: string): void {
    this._measuresService.getMeasures(type).subscribe(data => {
      this.sensors = data;
      this.dataSource.data = this.sensors;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
