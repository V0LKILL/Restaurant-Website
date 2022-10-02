import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../http/menu/menu.service";
import {MenuInterface} from "../../interfaces/menu.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public data: MenuInterface[] = [];
  public selected: MenuInterface = null;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.get().subscribe(
      (res: {data: MenuInterface[]}) => {
        // debugger
        this.data = res.data;
        this.selected = this.data[0]
        console.log(this.data[0])
      }
    )
  }

  changeSelectedDish(dish: MenuInterface) {
    this.selected = dish
  }
}
