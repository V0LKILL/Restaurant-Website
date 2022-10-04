import { TestBed } from '@angular/core/testing';

import { CurrentDishService } from './current-dish.service';

describe('CurrentDishService', () => {
  let service: CurrentDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
