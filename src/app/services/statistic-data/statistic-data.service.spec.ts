import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StatisticDataService } from './statistic-data.service';

describe('StatisticDataService', () => {
  let service: StatisticDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(StatisticDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
