import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmeComponent } from './bookme.component';

describe('BookmeComponent', () => {
  let component: BookmeComponent;
  let fixture: ComponentFixture<BookmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
