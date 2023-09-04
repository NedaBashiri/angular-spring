import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basUrl = "http://localhost:8090/user";

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.basUrl);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(this.basUrl, user);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.basUrl}/${id}`);
  }

  updateUser(id:number, user:User): Observable<Object>{
    return this.http.put(`${this.basUrl}/${id}`, user);
  }

  deleteUser(id:number): Observable<Object>{
    return this.http.delete(`${this.basUrl}/${id}`);
  }

}
