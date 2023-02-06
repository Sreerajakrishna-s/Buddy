import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousplacesComponent } from './famousplaces.component';

describe('FamousplacesComponent', () => {
  let component: FamousplacesComponent;
  let fixture: ComponentFixture<FamousplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
