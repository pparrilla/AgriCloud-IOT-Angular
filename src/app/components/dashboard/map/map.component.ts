import { Component, OnInit } from '@angular/core';
import { MeasuresService } from 'src/app/services/measures.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  sensors = [
    [
      {type: "temperature", id: 14, string: "Temperatura"},
      {type: "humidity", id: 14, string: "Humedad"},
      {type: "window", id: 31, string: "Ventana"},
    ],
    [
      {type: "temperature", id: 12, string: "Temperatura"},
      {type: "humidity", id: 12, string: "Humedad"},
      {type: "window", id: 32, string: "Ventana"},
    ],
    [

    ],
    [
      {type: "irradiation", id: 15, string: "Radiacion"},
    ],
    [
      {type: "temperature", id: 11, string: "Temperatura"},
      {type: "humidity", id: 11, string: "Humedad"},
      {type: "window", id: 33, string: "Ventana"},
    ],
    [
      {type: "window", id: 31, string: "Ventana"},
    ],
    [
      {type: "irradiation", id: 15, string: "Radiacion"},
      {type: "heater", id: 35, string: "Calefacción"},
    ],
    [
      {type: "temperature", id: 13, string: "Temperatura"},
      {type: "humidity", id: 13, string: "Humedad"},
      {type: "heater", id: 36, string: "Calefacción"},
    ],

  ]

  temperature: any = [];
  humidity: any = [];
  irradiation: any = [];
  window: any = [];
  heater: any = [];

  constructor(private _measuresService: MeasuresService) { }

  ngOnInit(): void {
    this.getMeasures("temperature");
    this.getMeasures("humidity");
    this.getMeasures("irradiance");
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
        case "irradiance" : this.irradiation = data; break;
        case "window" : this.window = data; break;
        case "heater" : this.heater = data; break
      }
    })
  }

  isSlideChecked(sensor: any) {
    if(sensor.value == 1) {
      return true;
    } else {
      return false;
    }

  }
  getValue(list: any) {
    let value;
    switch(list[0]) {
      case "temperature": value = this.findIdValue(this.temperature, list[1]); break;
      case "humidity" : value = this.findIdValue(this.humidity, list[1]); break;
      case "irradiation" : value = this.findIdValue(this.irradiation, list[1]); break;
      case "window" : value = this.findIdValue(this.window, list[1]); break;
      case "heater" : value = this.findIdValue(this.heater, list[1]); break;
    }
    return value;
  }
  findIdValue(list: any, id: any) {
    for (var item of list) {
      if (item.id == id) {
        return item.value;
      }
    }

  }


}
