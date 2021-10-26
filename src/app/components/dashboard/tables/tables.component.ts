import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/interfaces/sensor';
import { MeasuresService } from 'src/app/services/measures.service';

const listData: Sensor[] = [

];

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  sensors: Sensor[] = [];

  displayedColumns: string[] = ['id', 'value', 'time'];
  dataSource = listData;

  constructor(private _measuresService: MeasuresService) { }

  ngOnInit(): void {
      this._measuresService.getMeasures("temperature").subscribe(data => {
        this.sensors = data;
      })
  }

}
