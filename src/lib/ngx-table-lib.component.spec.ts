import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableLibComponent } from './ngx-table-lib.component';

describe('NgxTableLibComponent', () => {
  let component: NgxTableLibComponent;
  let fixture: ComponentFixture<NgxTableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTableLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
