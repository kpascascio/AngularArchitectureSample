import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmissionsUpcomingEventsComponent } from './admissions-upcoming-events.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CalendlyService } from '../../../shared/services/calendly.service';
import { of } from 'rxjs';


describe('AdmissionsUpcomingEvents', () => {
    let fixture: ComponentFixture<AdmissionsUpcomingEventsComponent>;
    let component: AdmissionsUpcomingEventsComponent;
    let mockCalendlyService;

    beforeEach( async(() => {
        mockCalendlyService = jasmine.createSpyObj('CalendlyService', ['getEvents']);

        TestBed.configureTestingModule({
            declarations: [AdmissionsUpcomingEventsComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: CalendlyService, useValue: mockCalendlyService}
            ]
        }).compileComponents();
    }));

    beforeEach( () => {
        fixture = TestBed.createComponent(AdmissionsUpcomingEventsComponent);
        component = fixture.componentInstance;
    });

    it('should set the events array from the calendlyservice', () => {
        mockCalendlyService.getEvents.and.returnValue(of([{}]));
        fixture.detectChanges();

    });
});
