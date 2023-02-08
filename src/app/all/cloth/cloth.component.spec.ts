import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothComponent } from './cloth.component';

describe('ClothComponent', () => {
  let component: ClothComponent;
  let fixture: ComponentFixture<ClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
