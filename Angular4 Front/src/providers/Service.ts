import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/employee';

@Injectable()
export class UsersProvider {
  user: any;
  data: string;
  message: any;
  userUrl = 'http://localhost:8080/api/getpersons';
  constructor(public http: Http) {
    console.log('Hello GithubUsersProvider Provider');
  }

 getPeople():Observable<User[]> {
  let headers = new Headers();
  headers.append("Authorization","Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huIiwiZXhwIjoxNTE5ODkyOTc5fQ.UUiwmIyf-KcvP9NC6fOayh5V-DkIi4SWpoPI4h2nTwRRoagNcWwkuA8YVQmWIugQh0H6JDDtOliyY73XrouYHQ");
    return this.http.get(`${this.userUrl}`,{headers:headers})
    .map(res =>res.json());
  }
  getPicture(){
    return this.http.get("https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2050/SITours/eiffel-tower-dinner-and-seine-river-cruise-in-paris-459739.jpg")
    .map(res => res);
  }
}
