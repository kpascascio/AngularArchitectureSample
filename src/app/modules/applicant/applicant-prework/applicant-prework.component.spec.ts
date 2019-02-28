import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ApplicantPreworkComponent } from './applicant-prework.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AssignmentService } from '../../../core/services/assignment/assignment.service';
import { of } from 'rxjs';
import mockAssignmentData from '../../../core/mocks/shared/assignment';


describe('ApplicantPreworkComponent', () => {
  let fixture: ComponentFixture<ApplicantPreworkComponent>;
  let component: ApplicantPreworkComponent;
  let mockAssignmentService;

  beforeEach(async(() => {
    mockAssignmentService = jasmine.createSpyObj('AssignmentService', ['getAllPreworkAssignments', 'getAllPreWorkAssignmentsMock']);
    TestBed.configureTestingModule({
      declarations: [ApplicantPreworkComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AssignmentService, useValue: mockAssignmentService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantPreworkComponent);
    component = fixture.componentInstance;
  });

  it('should set generalAssignmentArray correctly from the service', () => {
    mockAssignmentService.getAllPreworkAssignments.and.returnValue(of(mockAssignmentData));
    fixture.detectChanges();
    expect(component.generalAssignmentArray.length).toBe(1);
  });

});
