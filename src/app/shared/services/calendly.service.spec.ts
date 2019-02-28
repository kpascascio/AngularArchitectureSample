import { TestBed } from '@angular/core/testing';

import { CalendlyService } from './calendly.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CalendlyEventResponse } from '../models/calendly';

describe('CalendlyService', () => {
  let calendlyService: CalendlyService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CalendlyService
      ]
    });

    calendlyService = TestBed.get(CalendlyService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should get an array of events from Calendly', () => {
    calendlyService.getEvents().subscribe();

    const req = httpTestingController.expectOne('https://calendly.com/api/v1/users/me/events?include=invitee');
    req.flush(new CalendlyEventResponse());
    expect(req.request.method).toBe('GET');

  });
});
