import { Component, OnInit } from '@angular/core';
import {Sensor} from 'src/app/interfaces/sensor';
import { MeasuresService } from 'src/app/services/measures.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  temperature: any = [];
  humidity: any = [];
  irradiation: any = [];
  window: any = [];
  heater: any = [];

  constructor(private _measuresService: MeasuresService) { }

  ngOnInit(): void {
    this.getMeasures("temperature");
    this.getMeasures("humidity");
    this.getMeasures("irrigation");
    this.getMeasures("window");
    this.getMeasures("heater");
    console.log(this.humidity);
  }

  getMeasures(type: string): void {
    this._measuresService.getLastMeasures(type).subscribe(data => {
      console.log(data);
      switch(type) {
        case "temperature": this.temperature = data; break;
        case "humidity" : this.humidity = data; break;
        case "irrigation" : this.irradiation = data; break;
        case "window" : this.window = data; break;
        case "heater" : this.heater = data; break
      }
    })
  }

}
