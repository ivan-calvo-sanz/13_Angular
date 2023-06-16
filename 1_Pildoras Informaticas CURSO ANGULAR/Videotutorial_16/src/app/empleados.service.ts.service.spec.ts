import { TestBed } from '@angular/core/testing';

import { EmpleadosServiceTsService } from './empleados.service.ts.service';

describe('EmpleadosServiceTsService', () => {
  let service: EmpleadosServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
