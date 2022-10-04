import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../http/menu/menu.service";
import {MenuInterface} from "../../interfaces/menu.interface";
import {CurrentDishService} from '../../services/current-dish/current-dish.service';
import {combineLatest, forkJoin, map, zip} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: MenuInterface[] = [];
  public selected: MenuInterface;
  private dishOfDay: number;

  constructor(protected menuService: MenuService, protected currentDishService: CurrentDishService) { }

  public ngOnInit(): void {
    zip(this.getMenu(), this.getDishOfDay())
      .subscribe(_ =>  {
        const dishOfDay = this.data.find(item => item.id === this.dishOfDay);
        this.changeSelectedDish(dishOfDay);
      });
  }

  public changeSelectedDish(dish: MenuInterface) {
    this.selected = dish;
    this.currentDishService.dishSub.next(dish);
  }

  protected getMenu() {
    return this.menuService.get()
      .pipe(
        map((res: {data: MenuInterface[]}) => this.data = res.data)
      );
  }

  protected getDishOfDay() {
    return this.menuService.getDishOfDay()
      .pipe(
        map((res: { data: {id: number}}) => this.dishOfDay = res.data.id)
      );
  }
}

