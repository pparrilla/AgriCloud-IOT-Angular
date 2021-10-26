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

  async getMeasuresData (data: String) {
    return await this.http.get("http://0.0.0.0:8080/get/" + data).toPromise()
  }

  getMeasures(data: String): Observable<Sensor[]> {
    return this.http.get<Sensor[]>("http://0.0.0.0:8080/get/" + data);
  }
}
