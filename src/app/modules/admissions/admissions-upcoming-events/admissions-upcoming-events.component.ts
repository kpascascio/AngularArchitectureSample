import { Component, OnInit } from '@angular/core';
import { CalendlyService } from '../../../shared/services/calendly.service';
import { CalendlyEvent, CalendlyEventTypes, Invitee, CalendlyEventResponse } from '../../../shared/models/calendly';

@Component({
  selector: 'app-admissions-upcoming-events',
  templateUrl: './admissions-upcoming-events.component.html',
  styleUrls: ['./admissions-upcoming-events.component.scss']
})
export class AdmissionsUpcomingEventsComponent implements OnInit {

  public events: CalendlyEvent[];
  constructor(private calendlyService: CalendlyService) { }
  ngOnInit() {
    this.getAllEvents();
  }
  // TODO: change this to all upcoming events (within a week date)
  getAllEvents() {
    this.calendlyService.getEvents().subscribe((dataFromResponse: CalendlyEventResponse) => {
      this.events = dataFromResponse.data.map((calendlyEvent: CalendlyEvent, index: number) => {
        const inviteeId = calendlyEvent.relationships.invitee.data.id;

        const inviteeData = dataFromResponse.included.filter(
          calendlyInvitee => calendlyInvitee.id === inviteeId
        );

        calendlyEvent.relationships.invitee.data = inviteeData[0];
        return calendlyEvent;
      });
    });
  }

}
