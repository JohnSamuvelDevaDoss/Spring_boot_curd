import { User } from '../../models/employee';
import { PostProvider } from '../../providers/SendService';
import { UsersProvider } from '../../providers/Service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  user: any;
   public people: User[] = [];
  public ppl: User;
  public url: string="";
  message = '';
  constructor(public service: UsersProvider,
    public service1: PostProvider,
  private router: ActivatedRoute) { }
  ngOnInit() {
    this.router.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.message = params['text'] || '' ;
        console.log('here ' + this.message);
      });
     this.service.getPeople().subscribe((data) => {
      for (let n = 0; n < data.length ; n++) {
      this.people.push(data[n]);
      console.log(this.people[n].name)
    }
       // this.onget(this.people);
     // console.log('inside log' + this.people[0]);
    });
    //this.people.filter({
    //});
    this.service.getPicture().subscribe((data)=>{
      console.log(data.url);
      this.url = data.url;
    });
  }

  onget(people: User[]) {
    console.log('onget log ' + this.people[0]);
  }
}
