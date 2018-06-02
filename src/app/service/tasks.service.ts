import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
@Injectable()
export class TasksService {
  constructor(private http: Http) {}

  // getTasksData() {
  //     return this.http.get('http://localhost:3000/api/tasks')
  //     //.subscribe(data => {});
  //                 .toPromise()
  //                 .then(res => res)
  //                 .then(data => { return data; });
  // }
  getTasksData(): Observable<any> {
    return this.http
      .get("http://localhost:3000/api/tasks")
      .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
