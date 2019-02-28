import { AdmissionsService } from './admissions.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AdmissionsService', () => {
    let admissionsService: AdmissionsService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            
            providers: [
                AdmissionsService
            ]
        });

        admissionsService = TestBed.get(AdmissionsService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should return an array of leads', () => {
        admissionsService.getAllLeads().subscribe((dataFromMockServer: any) => {
            expect(dataFromMockServer.leads.length).toBe(0);
        });

        const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/admissions/getallleads');
        req.flush({ leads: []});
        expect(req.request.method).toBe('GET');
    });

  it('should return an array of all applicants', (done: DoneFn) => {
    admissionsService.getAllApplicants().subscribe((body: any) => {
      done();
    });

    const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/AdmissionsApplication/ApplicantList');
    req.flush({ });
    httpTestingController.verify();
    expect(req.request.method).toBe('GET');

  });
  
  it('should update a record for a lead', () => { });
});
