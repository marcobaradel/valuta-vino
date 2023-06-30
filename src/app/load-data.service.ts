import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_JSON_DB } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  private users: any;
  private evaluations: any;
  private regions: any;
  private countries: any;

  constructor(private http: HttpClient) { }

  loadUsers(){
    return new Promise<any>((resolve) => {
      this.http.get(URL_JSON_DB.USERS).subscribe(async (data: any) => {
        this.users = await data;
        resolve(this.users);
      })
    });
  }

  loadEvaluations() {
    return new Promise<any>((resolve) => {
      this.http.get(URL_JSON_DB.EVALUATIONS).subscribe(async (data: any) => {
        this.evaluations = await data;
        resolve(this.evaluations);
      })
    });
  }

  loadRegions() {
    return new Promise<any>((resolve) => {
      this.http.get(URL_JSON_DB.REGIONS).subscribe(async (data: any) => {
        this.regions = await data;
        resolve(this.regions);
      })
    });
  }

  loadCountries() {
    return new Promise<any>((resolve) => {
      this.http.get(URL_JSON_DB.COUNTRIES).subscribe(async (data: any) => {
        this.countries = await data;
        resolve(this.regions);
      })
    });
  }
}
