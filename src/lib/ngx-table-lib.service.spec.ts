import { TestBed } from '@angular/core/testing';

import { NgxTableLibService } from './ngx-table-lib.service';

describe('NgxTableLibService', () => {
  let service: NgxTableLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTableLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
