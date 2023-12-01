import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SousRegionComponent } from './sous-region.component';

describe('SousRegionComponent', () => {
  let component: SousRegionComponent;
  let fixture: ComponentFixture<SousRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousRegionComponent],
      imports: [HttpClientModule],

    });
    fixture = TestBed.createComponent(SousRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
