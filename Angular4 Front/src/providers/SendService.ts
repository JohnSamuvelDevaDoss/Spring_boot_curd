/**
 * New typescript file
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../app/app.component';
import { User } from '../models/employee';
import { Name } from '../models/name';
import {Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { promise } from 'protractor';

@Injectable()
export class PostProvider {
  exractData: any;
  recive: Name[];
  public sell: User;
  public single: User[];
  options: RequestOptionsArgs;
  headers: Headers;
  public id: string;
  userRequestUrl = 'http://localhost:8080/api/savePerson';
  userUrl = 'http://localhost:8080/api/editPerson';
  deleteUrl = 'http://localhost:8080/api/deletePerson';
  Url = 'http://localhost:8080/api/updatePerson';
  constructor(public http: Http) {
    console.log('Hello GithubUsersProvider Provider');
  }
  /*sellPeople(meme: string) {
    console.log('inside selling ppl');
    console.log(JSON.stringify({ meme }));
    return this.http.post(`${this.userRequestUrl}/adddata`, JSON.stringify({ meme }))
    .map(res => res.json());
  }*/
  sendPeople(sell): Observable<boolean> {
const headers = new Headers();
headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    console.log('i m in send people dude' + sell.name);
    console.log(JSON.stringify(sell));
     return this.http.post(`${this.userRequestUrl}`, JSON.stringify(sell), options)
     .map(res => res.json());
    // console.log('extractdata :' + this.exractData);
    // return this.exractData;
  }
  editservice(id1: string): Observable<User[]> {
    console.log('here lies id   ' + JSON.stringify(id1));
    this.exractData =  this.http.get(`${this.userUrl}` + `?id=` + id1 + ``)
    .map(res => <User[]>res.json());
    return this.exractData;
  }

  updateService(sell): Observable<boolean> {
    const headers = new Headers();
headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    console.log('i m in update people dude' + sell.name);
    console.log(JSON.stringify(sell));
    this.exractData = this.http.post(`${this.Url}`, JSON.stringify(sell), options)
     .map(res => res.json());
    return this.exractData;
  }
  deleteService(id1: string): Observable<boolean> {
    console.log('here lies id   ' + JSON.stringify(id1));
    this.exractData =  this.http.get(`${this.deleteUrl}` + `?id=` + id1 + ``)
    .map(res => res.json());
    return this.exractData;
  }
}
