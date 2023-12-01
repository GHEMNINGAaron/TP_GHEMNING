import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PaysService } from './pays.service';

describe('PaysService', () => {
  let service: PaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
