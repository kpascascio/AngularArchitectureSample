import { AdmissionsApplicantsTableComponent } from './admissions-applicants-table.component';
import { Applicant } from '../../../../shared/models/admissions/applicant';
import { AdmissionsService } from '../../../../core/services/admissions/admissions.service';

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdmissionsApplicantsTableComponent } from './admissions-applicants-table.component';
import mockApplicantsData from '../../../../core/mocks/admissions/applicants';
import { SortingService } from '../../../../shared/services/sorting.service';
// import { AdmissionsService } from '../../../../core/services/admissions/admissions.service';
// import { PhoneNumberPipe } from '../../../../shared/pipes/phone-number.pipe';
// import { AppRoutingModule } from '../../../../app.routing';

// describe('AdmissionsApplicantsTableComponent', () => {
//     let component: AdmissionsApplicantsTableComponent;
//     let fixture: ComponentFixture<AdmissionsApplicantsTableComponent>;
//     let mockAdmissionsService: AdmissionsService;
//     let mockPhoneNumberPipe: PhoneNumberPipe;

//     const applicants = mockApplicantsData;
//     beforeEach(async(() => {
//         mockAdmissionsService = jasmine.createSpyObj('AdmissionsService', ['getAllApplicants']);
//         mockPhoneNumberPipe = jasmine.createSpyObj('PhoneNumberPipe', ['transform']);
//         TestBed.configureTestingModule({
//             imports: [
//                 AppRoutingModule
//             ],
//             declarations: [
//                 AdmissionsApplicantsTableComponent,
//                 { provide: PhoneNumberPipe, useValue: mockPhoneNumberPipe }
//             ],
//             providers: [
//                 { provide: AdmissionsService, useValue: mockAdmissionsService }
//             ]
//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(AdmissionsApplicantsTableComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//         component.applicants = applicants;
//     });

//     it('should getAllApplicants from service', () => {

//         //   component.applicants = applicants;
//         //   component.getAllApplicants();

//         //   expect(component.getAllApplicants).toHaveBeenCalled();
//     });
// });


describe('AdmissionsApplicantTable', () => {
    let component: AdmissionsApplicantsTableComponent;
    let applicants: Applicant[];
    let mockAdmissionsService: AdmissionsService;
    let mockSortingService: SortingService;
    beforeEach(() => {
        applicants = mockApplicantsData;

        mockSortingService = jasmine.createSpyObj(['sort']);
        mockAdmissionsService = jasmine.createSpyObj('AdmissionsService', ['getAllApplicants']);
        component = new AdmissionsApplicantsTableComponent( mockSortingService, mockAdmissionsService);

    });

    // describe('getApplicants', () => {

    //     it('should return array of applicants', () => {
    //         console.log(component.applicants);
    //         component.applicants = applicants;
    //         component.getAllApplicants();

    //         expect(component.applicants).toBeGreaterThan(1);
    //     });
    // });
});
