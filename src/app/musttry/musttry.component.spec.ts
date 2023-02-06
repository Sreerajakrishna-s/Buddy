import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusttryComponent } from './musttry.component';

describe('MusttryComponent', () => {
  let component: MusttryComponent;
  let fixture: ComponentFixture<MusttryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusttryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusttryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
