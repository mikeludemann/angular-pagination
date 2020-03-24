import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationNumbersComponent } from './pagination-numbers.component';

describe('PaginationNumbersComponent', () => {
  let component: PaginationNumbersComponent;
  let fixture: ComponentFixture<PaginationNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
