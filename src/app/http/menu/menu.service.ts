import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MenuInterface} from "../../interfaces/menu.interface";


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

    public get(): Observable<any> {

        return this.http.get(`${environment.url}/assets/json/menu.json`)

    }

}
