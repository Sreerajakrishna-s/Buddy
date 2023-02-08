import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RooftopComponent } from './rooftop.component';

describe('RooftopComponent', () => {
  let component: RooftopComponent;
  let fixture: ComponentFixture<RooftopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RooftopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RooftopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
