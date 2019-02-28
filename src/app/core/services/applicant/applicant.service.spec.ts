import { TestBed } from '@angular/core/testing';
import { ApplicantService } from './applicant.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeadersService } from '../../../shared/services/headers.service';
import { Application } from '../../../shared/models/application/application';

describe('ApplicantService', () => {
  let applicantService: ApplicantService;
  let headerServiceSpy: jasmine.SpyObj<HeadersService>;
  let mockHeadersService: HeadersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    mockHeadersService = jasmine.createSpyObj('HeadersService', ['getHeaders']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApplicantService,
        { provide: HeadersService, useValue: mockHeadersService }
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    applicantService = TestBed.get(ApplicantService);
    headerServiceSpy = TestBed.get(HeadersService);
  });

  it('should get an application based on the user', (done: DoneFn) => {
    applicantService.getApplication(4).subscribe((body: any) => {
      expect(typeof body).toBe('object');
      expect(body.id).toBe(4);
      done();
    });

    const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/Application/GetByOwner/4');
    req.flush({ id: 4 });
    httpTestingController.verify();
    expect(req.request.method).toBe('GET');
  });

  it('should create a application', () => {
    const applicantData: Application = new Application();
    applicantService.apply(applicantData).subscribe();

    const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/Application/');
    req.flush(applicantData);
    httpTestingController.verify();
    expect(req.request.method).toBe('POST');
  });
});
