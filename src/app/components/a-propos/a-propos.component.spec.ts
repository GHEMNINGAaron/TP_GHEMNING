import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarRatingModule } from "ngx-bar-rating";
import { AProposComponent } from './a-propos.component';

describe('AProposComponent', () => {
  let component: AProposComponent;
  let fixture: ComponentFixture<AProposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AProposComponent],
      imports: [BarRatingModule],
    });
    fixture = TestBed.createComponent(AProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
