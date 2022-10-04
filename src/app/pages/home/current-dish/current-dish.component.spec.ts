import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDishComponent } from './current-dish.component';

describe('CurrentDishComponent', () => {
  let component: CurrentDishComponent;
  let fixture: ComponentFixture<CurrentDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
