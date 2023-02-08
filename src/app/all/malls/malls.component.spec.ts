import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallsComponent } from './malls.component';

describe('MallsComponent', () => {
  let component: MallsComponent;
  let fixture: ComponentFixture<MallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
