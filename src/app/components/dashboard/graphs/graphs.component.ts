import { Component, OnInit } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';
import { Sensor } from 'src/app/interfaces/sensor';
import { MeasuresService } from 'src/app/services/measures.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  sensors: Sensor[] = [];

  displayedColumns: string[] = ['device_id', 'value', 'timestamp'];
  dataSource = this.sensors;
  dataForChart: any = [];
  dataList: any = [0,0];
  type: ChartType = ChartType.Line;
  columnList: any = [];
  title: string = "";


  constructor(private _measuresService: MeasuresService) { }

  ngOnInit(): void {
    this.getMeasures("temperature");
  }

  getMeasures(typeData: string): void {
    this._measuresService.getMeasures(typeData).subscribe(data => {
      this.sensors = data;
      this.dataSource = this.sensors;
      this.drawChart(typeData)
    })
  }

  drawChart(typeData: string): void {
    this.dataSource.sort((a: any, b: any) => (a.device_id - b.device_id));
    // Generate columnList
    this.columnList = []
    this.columnList.push('Timestamp');
    let lastDevice = -1;
    let counter = 0;
    let counterCreator = -1;
    this.dataForChart[counter] = []

    for (const data of this.dataSource) {
      if (data.device_id != lastDevice) {
        lastDevice = data.device_id;
        let deviceToString = 'id_' + lastDevice;
        this.columnList.push(deviceToString);
        counter = 0;
      }
      if (counter > counterCreator) {
        this.dataForChart[counter] = []
        this.dataForChart[counter].push(data.timestamp);
      }
      this.dataForChart[counter].push(data.value);
      counter++;
      counterCreator++;
    }
    // Now in columnList there is how many differents device_id



    console.log(this.columnList)
    console.log(this.dataForChart)
  }

  // drawChart(typeData: string): void {
  //   this.dataSource.sort((a: any, b: any) => (a.device_id - b.device_id));
  //   let i: number = 0;
  //   let deviceID: number = this.dataSource[i].device_id;
  //   this.deviceList.push(deviceID);
  //   let counter: number = 0;
  //   this.dataForChart[counter] = [];
  //   for (i = 0; i < this.dataSource.length; i++) {
  //     if (deviceID != this.dataSource[i].device_id) {
  //       counter++;
  //       this.dataForChart[counter] = [];
  //       deviceID = this.dataSource[i].device_id;
  //       this.deviceList.push(deviceID);
  //     }
  //     this.dataForChart[counter].push([this.dataSource[i].timestamp, this.dataSource[i].value]);
  //   }
  //   this.title = typeData;
  //   this.chart = new google.visualization.DataTable();
  //   this.chart.addColumn('string', typeData);
  //   for (var device of this.deviceList) {
  //     var sensor = "device_" + device;
  //     this.chart.addColumn('number', sensor);
  //   }

  //   for (i = 0; i < this.dataForChart[counter].length; i++) {
  //     let row: any = [];
  //     row.push(this.dataForChart[i].timestamp);
  //     for(let j=0; j <= counter; j++) {
  //       row.push(this.dataForChart[j].value);
  //     }
  //     this.chart.addRow(row);
  //   }

  //   console.log(this.chart)
  // }

}
