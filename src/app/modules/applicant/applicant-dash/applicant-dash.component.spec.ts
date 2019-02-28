import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ApplicantDashComponent } from './applicant-dash.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('ApplicantDashComponent', () => {
    let fixture: ComponentFixture<ApplicantDashComponent>;
    let component: ApplicantDashComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ApplicantDashComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ApplicantDashComponent);
        component = fixture.componentInstance;
    });

    it('should set generalAssignmentArray correctly from the service', () => {
        component.calendlyUrl = 'https://calendly.com/admissions-32';
        fixture.detectChanges();
        console.log(fixture.nativeElement.querySelector('#admissionsCalendlyLink'));
        expect(fixture.nativeElement.querySelector('#admissionsCalendlyLink')).toBe(1);
    });

});
