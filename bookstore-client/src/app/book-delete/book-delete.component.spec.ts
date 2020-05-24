import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeleteComponent } from './book-delete.component';

describe('DeleteComponent', () => {
  let component: BookDeleteComponent;
  let fixture: ComponentFixture<BookDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
