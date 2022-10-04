import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuInterface} from '../../interfaces/menu.interface';
import {CurrentDishService} from '../../services/current-dish/current-dish.service';
import {Subject, takeUntil} from 'rxjs';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-dish-info',
  templateUrl: './dish-info.component.html',
  styleUrls: ['./dish-info.component.scss']
})
export class DishInfoComponent extends BaseComponent implements OnInit {
  public dish: MenuInterface;

  constructor(private currentDishService:CurrentDishService) {
    super();
  }

  public ngOnInit(): void {
    this.currentDishService.dish$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((res: MenuInterface) =>  this.dish = res);

  }
}
