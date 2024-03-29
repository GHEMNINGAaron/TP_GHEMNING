import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RegionComponent } from './region.component';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionComponent],
      imports: [HttpClientModule],

    });
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
