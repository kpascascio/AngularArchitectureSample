import { AssignmentService } from './assignment.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Assignment } from '../../../shared/models/assignment/assignment';

describe('AssignmentService', () => {
    let assignmentService: AssignmentService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                AssignmentService
            ]
        });
        assignmentService = TestBed.get(AssignmentService);
        httpTestingController = TestBed.get(HttpTestingController);

    });

    it('should return all assignments', () => {
        assignmentService.getAllAssignments().subscribe((dataFromMockServer: any) => {
            expect(dataFromMockServer.assignments.length).toBe(0);
        });

        const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/Assignment/GetAllAssignments');
        req.flush({ assignments: [] });
        expect(req.request.method).toBe('GET');
    });

    it('should return all prework assignments', () => {
        assignmentService.getAllPreworkAssignments().subscribe((dataFromMockServer: any) => {
            expect(dataFromMockServer.prework.length.toBe(0)
            );
            const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/prework/getprework');
            req.flush({ prework: [] });
            httpTestingController.verify();
            expect(req.request.method).toBe('GET');
        });
    });
    it('should return a specific assignment', (done: DoneFn) => {
         assignmentService.getAssignment('4').subscribe((body: any) => {
            expect(typeof body).toBe('object');
            expect(body.id).toBe(4);
             done();
        });

        const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/Assignment/4');
        req.flush({ id: 4 });
        httpTestingController.verify();
        expect(req.request.method).toBe('GET');
    });
    it('should create an assignment', () => {
        const assignmentData: Assignment = new Assignment();
        assignmentService.createAssignment(assignmentData).subscribe();

        const req = httpTestingController.expectOne('https://elevenfiftysis.azurewebsites.net/api/Assignment/CreateAssignment');
        req.flush(assignmentData);
        httpTestingController.verify();
        expect(req.request.method).toBe('POST');
    });
});
