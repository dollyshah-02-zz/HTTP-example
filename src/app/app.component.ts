import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import { post } from 'selenium-webdriver/http';
import { Demo } from './demo'
import{Student} from './student'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public posts: Array<Demo[]> = [];
  //private url='https://jsonplaceholder.typicode.com/posts';
  // private url1='https://reqres.in/api/users?page=2';
  // private url2='https://reqres.in/api/unknown/2';
  


  constructor(private demoService: DemoserviceService) {

  }
  
  s: Student = new Student();
  ngOnInit() {
    console.log(this.posts);
    this.demoService.getData().subscribe(response => {
      // if (response && response.data) {
        this.posts.push(response);
        console.log(this.posts);
      // }
    });
  }
  deleteUser(id){
    this.demoService.deleteUser(this.s).subscribe(data=>{
      let index=this.posts.indexOf(id);
      this.posts.splice(index,1);
      console.log(this.posts);
    })
  }
  updateUser(post){
    this.demoService.updateUser(post).subscribe();
  }

}