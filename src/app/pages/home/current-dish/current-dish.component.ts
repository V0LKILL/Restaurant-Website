import { Component, OnInit } from '@angular/core';
import {DishInfoComponent} from '../../../components/dish-info/dish-info.component';

@Component({
  selector: 'app-current-dish',
  templateUrl: './current-dish.component.html',
  styleUrls: ['./current-dish.component.scss']
})
export class CurrentDishComponent extends DishInfoComponent {

}
