import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_JSON_DB } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  private users: any;
  private evaluations: any;

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
}
