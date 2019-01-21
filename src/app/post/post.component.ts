import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../student'

import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postData:Array<Student[]>=[];

  s: Student = new Student();
  // private url='https://reqres.in/api/unknown/2';
  constructor(private demoService: DemoserviceService) { }

  ngOnInit() {

  }
  //post
  createUser(): void {
    this.demoService.createUser(this.s).subscribe(data => this.postData = data);
    console.log(this.postData);
  }
  
  }

