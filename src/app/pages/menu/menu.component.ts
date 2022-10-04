import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {MenuService} from '../../http/menu/menu.service';
import {CurrentDishService} from '../../services/current-dish/current-dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends HomeComponent implements OnInit {

  public override ngOnInit(): void {
    this.getMenu().subscribe();
  }
}
