import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../interfaces/sensor';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  constructor(
    private http: HttpClient
  ) { }

  getMeasures(data: String): Observable<Sensor[]> {
    return this.http.get<Sensor[]>("http://192.168.1.102:8080/type/" + data);
  }

  getLastMeasures(data: String): Observable<Sensor[]> {
    return this.http.get<Sensor[]>("http://192.168.1.102:8080/type/sqlite/" + data);
  }
}
