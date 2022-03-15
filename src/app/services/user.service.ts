import { Injectable } from '@angular/core';
import ServerConfig from '../config/ServerConfig';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CanviaResponse } from '../types/response/CanviaResponse';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  listUsers() {
    return this.http.get<CanviaResponse<User>>(ServerConfig.getServerRoute("users"));
  }

  deleteUser(user: User) {
    return this.http.delete<CanviaResponse<any>>(ServerConfig.getServerRoute("user") + "/" + user.id);
  }

  createUser(user: User) {
    return this.http.post<CanviaResponse<User>>(ServerConfig.getServerRoute("user"), user);
  }

  findByUserId(id: string) {
    return this.http.get<CanviaResponse<User>>(ServerConfig.getServerRoute("user") + "/" + id);
  }

  updateUser(user: User) {
    return this.http.put<CanviaResponse<User>>(ServerConfig.getServerRoute("user"), user);
  }
}
