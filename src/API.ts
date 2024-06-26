import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pal, Login, User, UserCreateDTO, UserUpdateDTO, PalCreateDTO, PalUpdateDTO, Resource, ResourceCreateDTO, ResourceUpdateDTO, HaveResource, HaveResourceCreateDTO, HaveResourceUpdateDTO, HavePal, HavePalCreateDTO, HavePalUpdateDTO, HaveElement, HaveElementCreateDTO, HaveElementUpdateDTO, Activity, ActivityCreateDTO, ActivityUpdateDTO, ElementCreateDTO, ElementUpdateDTO, HaveActivityCreateDTO, HaveActivityUpdateDTO, HaveActivity} from './Class'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ConectLogin {
  private apiURL = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  CREATE(body: Login) {
    return this.http.post<Login>(`${this.apiURL}`, body, { observe: 'response' })
  };
};






@Injectable({
  providedIn: 'root',
})

export class ConectUser {
  private apiURL = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number, headers: HttpHeaders): Observable<User> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`, {headers});
  };


  private apiUrlLogin = 'http://localhost:8080/user/login';
  GETlogin(headers: HttpHeaders): Observable<User> {
    return this.http.get<any>(`${this.apiUrlLogin}`, {headers});
  };


  private apiUrlIds = 'http://localhost:8080/user/ids';
  GETids(endpoint: number[] ,headers: HttpHeaders): Observable<User[]> {
    return this.http.get<any>(`${this.apiUrlIds}/${endpoint}`, {headers});
  };


  GETall(headers: HttpHeaders): Observable<User[]> {
    return this.http.get<any>(`${this.apiURL}`, {headers});
  };



  CREATE(body: UserCreateDTO) {
    return this.http.post<UserCreateDTO>(this.apiURL, body);
  };


  UPDATE(endpoint: number, body: UserUpdateDTO, headers: HttpHeaders){
    return this.http.put<UserUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}






@Injectable({
  providedIn: 'root',
})

export class ConectPal {
  private apiURL = 'http://localhost:8080/pal';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number): Observable<Pal> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`);
  };


  private apiUrlName = 'http://localhost:8080/pal/name';
  GETname(endpoint: string): Observable<Pal> {
    return this.http.get<any>(`${this.apiUrlName}/${endpoint}`);
  };


  private apiUrlIds = 'http://localhost:8080/pal/ids';
  GETids(endpoint: number[]): Observable<Pal[]> {
    return this.http.get<any>(`${this.apiUrlIds}/${endpoint}`);
  };


  GETall(): Observable<Pal[]> {
    return this.http.get<any>(`${this.apiURL}`);
  };


  CREATE(body: PalCreateDTO, headers: HttpHeaders) {
    return this.http.post<PalCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: PalUpdateDTO, headers: HttpHeaders){
    return this.http.put<PalUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}





@Injectable({
  providedIn: 'root',
})

export class ConectResource {
  private apiURL = 'http://localhost:8080/resource';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number): Observable<Resource> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`);
  };


  private apiUrlName = 'http://localhost:8080/resource/name';
  GETname(endpoint: string): Observable<Resource> {
    return this.http.get<any>(`${this.apiUrlName}/${endpoint}`);
  };


  private apiUrlIds = 'http://localhost:8080/resource/ids';
  GETids(endpoint: number[]): Observable<Resource[]> {
    return this.http.get<any>(`${this.apiUrlIds}/${endpoint}`);
  };


  GETall(): Observable<Resource[]> {
    return this.http.get<any>(`${this.apiURL}`);
  };


  CREATE(body: ResourceCreateDTO, headers: HttpHeaders) {
    return this.http.post<ResourceCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: ResourceUpdateDTO, headers: HttpHeaders){
    return this.http.put<ResourceUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}






@Injectable({
  providedIn: 'root',
})

export class ConectActivity {
  private apiURL = 'http://localhost:8080/activity';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number): Observable<Activity> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`);
  };


  private apiUrlName = 'http://localhost:8080/activity/name';
  GETname(endpoint: string): Observable<Activity> {
    return this.http.get<any>(`${this.apiUrlName}/${endpoint}`);
  };


  private apiUrlIds = 'http://localhost:8080/activity/ids';
  GETids(endpoint: number[]): Observable<Activity[]> {
    return this.http.get<any>(`${this.apiUrlIds}/${endpoint}`);
  };


  GETall(): Observable<Activity[]> {
    return this.http.get<any>(`${this.apiURL}`);
  };


  CREATE(body: ActivityCreateDTO, headers: HttpHeaders) {
    return this.http.post<ActivityCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: ActivityUpdateDTO, headers: HttpHeaders){
    return this.http.put<ActivityUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}





@Injectable({
  providedIn: 'root',
})

export class ConectElement {
  private apiURL = 'http://localhost:8080/element';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number): Observable<Element> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`);
  };


  private apiUrlName = 'http://localhost:8080/element/name';
  GETname(endpoint: string): Observable<Element> {
    return this.http.get<any>(`${this.apiUrlName}/${endpoint}`);
  };


  private apiUrlIds = 'http://localhost:8080/element/ids';
  GETids(endpoint: number[]): Observable<Element[]> {
    return this.http.get<any>(`${this.apiUrlIds}/${endpoint}`);
  };


  GETall(): Observable<Element[]> {
    return this.http.get<any>(`${this.apiURL}`);
  };


  CREATE(body: ElementCreateDTO, headers: HttpHeaders) {
    return this.http.post<ElementCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: ElementUpdateDTO, headers: HttpHeaders){
    return this.http.put<ElementUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}

















@Injectable({
  providedIn: 'root',
})

export class ConectHaveResource {
  private apiURL = 'http://localhost:8080/haveResource';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number): Observable<HaveResource> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`);
  };


  private apiUrlPal = 'http://localhost:8080/haveResource/pal';
  GETpal(endpoint: number): Observable<HaveResource> {
    return this.http.get<any>(`${this.apiUrlPal}/${endpoint}`);
  };  


  GETall(): Observable<HaveResource[]> {
    return this.http.get<any>(`${this.apiURL}`);
  };


  private apiUrlPalIds = 'http://localhost:8080/haveResource/pal/ids';
  GETpalIds(endpoint: number[]): Observable<HaveResource[]> {
    return this.http.get<any>(`${this.apiUrlPalIds}/${endpoint}`);
  }; 


  private apiUrlResourceIds = 'http://localhost:8080/haveResource/resource/ids';
  GETresourceIds(endpoint: number[]): Observable<HaveResource[]> {
    return this.http.get<any>(`${this.apiUrlResourceIds}/${endpoint}`);
  };


  CREATE(body: HaveResourceCreateDTO, headers: HttpHeaders) {
    return this.http.post<HaveResourceCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: HaveResourceUpdateDTO, headers: HttpHeaders){
    return this.http.put<HaveResourceUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}







@Injectable({
  providedIn: 'root',
})

export class ConectHavePal {
  private apiURL = 'http://localhost:8080/havePal';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number, headers: HttpHeaders): Observable<HavePal> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`, {headers});
  };


  GETall(headers: HttpHeaders): Observable<HavePal[]> {
    return this.http.get<any>(`${this.apiURL}`, {headers});
  };


  private apiUrlUserIds = 'http://localhost:8080/havePal/user/ids';
  GETuserIds(endpoint: number[], headers: HttpHeaders): Observable<HavePal[]> {
    return this.http.get<any>(`${this.apiUrlUserIds}/${endpoint}`, {headers});
  };  


  private apiUrlPalIds = 'http://localhost:8080/havePal/pal/ids';
  GETpalIds(endpoint: number[], headers: HttpHeaders): Observable<HavePal[]> {
    return this.http.get<any>(`${this.apiUrlPalIds}/${endpoint}`, {headers});
  }; 


  private apiUrlUser_login = 'http://localhost:8080/havePal/user_login';
  GETuser_login(headers: HttpHeaders): Observable<HavePal[]> {
    return this.http.get<any>(`${this.apiUrlUser_login}`, {headers});
  };


  private apiUrlUser_login_admin = 'http://localhost:8080/havePal/user_login_admin';
  GETuser_login_admin(headers: HttpHeaders): Observable<HavePal[]> {
    return this.http.get<any>(`${this.apiUrlUser_login_admin}`, {headers});
  };


  CREATE(body: HavePalCreateDTO, headers: HttpHeaders) {
    return this.http.post<HavePalCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: HavePalUpdateDTO, headers: HttpHeaders){
    return this.http.put<HavePalUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}


@Injectable({
  providedIn: 'root',
})

export class ConectHaveElement {
  private apiURL = 'http://localhost:8080/haveElement';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number): Observable<HaveElement> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`);
  };


  private apiUrlPal = 'http://localhost:8080/haveElement/pal';
  GETpal(endpoint: number): Observable<HaveElement> {
    return this.http.get<any>(`${this.apiUrlPal}/${endpoint}`);
  };  


  GETall(): Observable<HaveElement[]> {
    return this.http.get<any>(`${this.apiURL}`);
  };


  private apiUrlPalIds = 'http://localhost:8080/haveElement/pal/ids';
  GETpalIds(endpoint: number[]): Observable<HaveElement[]> {
    return this.http.get<any>(`${this.apiUrlPalIds}/${endpoint}`);
  }; 


  private apiUrlElementIds = 'http://localhost:8080/haveElement/element/ids';
  GETelementIds(endpoint: number[]): Observable<HaveElement[]> {
    return this.http.get<any>(`${this.apiUrlElementIds}/${endpoint}`);
  };


  CREATE(body: HaveElementCreateDTO, headers: HttpHeaders) {
    return this.http.post<HaveElementCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: HaveElementUpdateDTO, headers: HttpHeaders){
    return this.http.put<HaveElementUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}



@Injectable({
  providedIn: 'root',
})


export class ConectHaveActivity {
  private apiURL = 'http://localhost:8080/haveActivity';

  constructor(private http: HttpClient) { }


  GETid(endpoint: number): Observable<HaveActivity> {
    return this.http.get<any>(`${this.apiURL}/${endpoint}`);
  };


  private apiUrlPal = 'http://localhost:8080/haveActivity/pal';
  GETpal(endpoint: number): Observable<HaveActivity> {
    return this.http.get<any>(`${this.apiUrlPal}/${endpoint}`);
  };  


  GETall(): Observable<HaveActivity[]> {
    return this.http.get<any>(`${this.apiURL}`);
  };


  private apiUrlPalIds = 'http://localhost:8080/haveActivity/pal/ids';
  GETpalIds(endpoint: number[]): Observable<HaveActivity[]> {
    return this.http.get<any>(`${this.apiUrlPalIds}/${endpoint}`);
  }; 


  private apiUrlActivityIds = 'http://localhost:8080/haveActivity/activity/ids';
  GETactivityIds(endpoint: number[]): Observable<HaveActivity[]> {
    return this.http.get<any>(`${this.apiUrlActivityIds}/${endpoint}`);
  };


  CREATE(body: HaveActivityCreateDTO, headers: HttpHeaders) {
    return this.http.post<HaveActivityCreateDTO>(this.apiURL, body, {headers});
  };


  UPDATE(endpoint: number, body: HaveActivityUpdateDTO, headers: HttpHeaders){
    return this.http.put<HaveActivityUpdateDTO>(`${this.apiURL}/${endpoint}`, body, {headers});
  };


  DELETE(endpoint: number, headers: HttpHeaders){
    return this.http.delete<any>(`${this.apiURL}/${endpoint}`, {headers});
  };
}