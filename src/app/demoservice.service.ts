import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,of} from 'rxjs';
import{ Demo } from './demo'
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  private url='https://reqres.in/api/';
  constructor(private http:HttpClient) { }

  getData():Observable<Demo[]>{
    console.log("h");
    return this.http.get<Demo[]>(this.url + "users/1");
    }


    
  createUser(student:Student):Observable<any>{
    // console.log(student.name);
    // console.log(student.job);
    // console.log(student.age);
    return this.http.post(this.url + "users", student);
   }
   deleteUser(student:Student):Observable<Student[]>{
     return this.http.delete<Student[]>(this.url+"users/2"+student.id);
   }
   updateUser(student:Student):Observable<Student[]>{
     return this.http.patch<Student[]>(this.url+"users/2",student);

   }
  
}
