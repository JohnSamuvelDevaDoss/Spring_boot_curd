import { User } from '../../models/employee';
import { PostProvider } from '../../providers/SendService';
import { UsersProvider } from '../../providers/Service';
import { SaveComponent } from '../save/save.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editsub',
  templateUrl: './editsub.component.html',
  styleUrls: ['./editsub.component.css']
})
export class EditsubComponent implements OnInit {

  rForm: FormGroup;
  public ppl: User;
  public people: User[] = [];
  name: string;
  age: string;
  id: string;
  message = '';
  constructor(
  public service: UsersProvider,
    public service1: PostProvider,
    private fb: FormBuilder,
    public router: Router,
    public routy: ActivatedRoute,
    public save: SaveComponent
  ) { this.rForm = fb.group({
    name: '',
    age: '',
    id: ''
  });
  }
Updatemethod(ppl) {
    this.name = ppl.name;
    this.age = ppl.age;
    this.id = ppl.id;
    this.service1.updateService(ppl).subscribe((data) => {
      this.onhear(data);
    });
}
  onhear(reach: boolean) {

  if (reach === true) {
      this.message = 'updated';
      this.router.navigate(['/menu/show'], { queryParams: { text: this.message } });
      console.log('in if condition ' + this.message);
    }else {
      this.message = 'Not updated';
      this.router.navigate(['/menu/show'], { queryParams: { text: this.message } });
    console.log('in else ' + this.message.length);
    }
  }

  ngOnInit() {
    this.routy.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = params['id'] || '' ;
        console.log('here ' + this.id);
        this.service1.editservice(this.id).subscribe((data) => {
         this.people = data;
          this.ppl = this.people[0];
          console.log('got single employee :' + this.ppl);
        });
      });
  }

}
