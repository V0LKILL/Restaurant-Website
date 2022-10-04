import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MenuInterface} from '../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentDishService {
  public dishSub: Subject<MenuInterface> = new Subject();
  public dish$: Observable<MenuInterface> = this.dishSub.asObservable();
}
