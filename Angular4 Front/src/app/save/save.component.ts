import { User } from '../../models/employee';
import { PostProvider } from '../../providers/SendService';
import { UsersProvider } from '../../providers/Service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Inject, Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Name } from '../../models/name';
import { TypeScriptEmitter } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})

@Injectable()
export class SaveComponent implements OnInit {
  public recive = true;
  message = '';
  // abc =  Observable.of('true');
  // now: Observable<string>;
  // public response: string;
  rForm: FormGroup;
  public ppl: User;
  name: string;
  age: string;
  id = 'true';
  rush: Name[];
  constructor(
  public service: UsersProvider,
    public service1: PostProvider,
    private fb: FormBuilder,
    public router: Router
  ) { this.rForm = fb.group({
    name: '',
    age: '',
    id: ''
  });
  }

submitform(ppl) {
    /* this.name = ppl.name;
    this.age = ppl.age;
    this.id = ppl.id; */
    console.log('here is people for you' + ppl.name);
    this.service1.sendPeople(ppl).subscribe((data) => {
this.recive = data;
      console.log('save value' + data);
      // this.recive = this.recive.trim();
      this.onhear(data);
  });
  }
onhear(reach: boolean) {

  if (reach === true) {
      this.message = 'saved';
      this.router.navigate(['/menu/show'], { queryParams: { text: this.message } });
      console.log('in if condition ' + this.message);
    }else {
      this.message = 'Not saved';
      this.router.navigate(['/menu/show'], { queryParams: { text: this.message } });
    console.log('in else ' + this.message.length);
    }
  }
  ngOnInit() {
    
  }
}
