import { User } from '../../models/employee';
import { PostProvider } from '../../providers/SendService';
import { UsersProvider } from '../../providers/Service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eidt',
  templateUrl: './eidt.component.html',
  styleUrls: ['./eidt.component.css']
})
export class EidtComponent implements OnInit {

  public people: User[] = [];
  public ppl: User;
  message = '';
  constructor(public service: UsersProvider,
    public service1: PostProvider,
  private router: ActivatedRoute,
private routy: Router) { }

  Deletemethod(id) {
    this.service1.deleteService(id).subscribe((data) => {
      this.onDelete(data);
  });
  }
    onDelete(val: boolean) {
      if (val === true) {
      this.message = 'deleted';
      this.routy.navigate(['../../menu/show'], { queryParams: { text: this.message } });
      console.log('in if condition ' + this.message);
    }else {
      this.message = 'Not deleted';
      this.routy.navigate(['../../menu/show'], { queryParams: { text: this.message } });
    console.log('in else ' + this.message.length);
    }
    }

  ngOnInit() {
    this.service.getPeople().subscribe((data) => {
      for (let n = 0; n < data.length ; n++) {
      this.people.push(data[n]);
    }
      console.log('inside log' + this.people[0]);
    });
  }

}
