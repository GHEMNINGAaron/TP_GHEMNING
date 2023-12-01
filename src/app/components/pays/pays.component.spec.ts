import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PaysComponent } from './pays.component';

describe('PaysComponent', () => {
  let component: PaysComponent;
  let fixture: ComponentFixture<PaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaysComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(PaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
