import { Component, OnInit } from '@angular/core';
import { Lead } from '../../../shared/models/admissions/lead';
import { AdmissionsService } from '../../../core/services/admissions/admissions.service';
import { SortingService } from '../../../shared/services/sorting.service';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
'Jul', 'Aug', 'Sep', 'Oct', ' Nov', 'Dec'
];

@Component({
  selector: 'app-admissions-dash',
  templateUrl: './admissions-dash.component.html',
  styleUrls: ['./admissions-dash.component.scss']
})


export class AdmissionsDashComponent implements OnInit {

  // Pie
  public barChartLabels: string[] = ['Cold Leads', 'Lukewarm Leads', 'Warm Leads', 'Hot Leads', 'The Glen Gary Leads'];
  public barChartData: number[] = [180, 150, 130, 100, 60];

  public barChartBGColors: Array<any> = [
    { // grey
      backgroundColor: ['blue', 'yellow', 'red', 'green', 'green']
    },
  ];

  public barChartType = 'bar';

  dataSource: Lead[];
  seededUsers: Lead[];
  searchString: string;

  constructor(private _admissionService: AdmissionsService, private _sortService: SortingService) { }

  onSorted($event) {
    this._sortService.sort($event, this.dataSource);
  }

  ngOnInit() {
    this.seededUsers = [{
      applicationEntityId: 'guid',
      firstName: 'Jane',
      lastName: 'Handshoe',
      dateCreated: new Date('2018-11-29T15:05:38.9151244-05:00'),
      temperature: 2,
      coachID: '0',
      coachName: 'Alex',
      calcDate: new Date('11-13-2018'),
      dateString: 'Nov 13, 2018'
    },
    {
      applicationEntityId: 'guid',
      firstName: 'John',
      lastName: 'Novacelek',
      dateCreated: new Date('2018-11-29T15:05:38.9151244-05:00'),
      temperature: 3,
      coachID: '0',
      coachName: 'Alex',
      calcDate: new Date('10-23-2018'),
      dateString: 'Oct 23, 2018'
    },
    {
      applicationEntityId: 'guid',
      firstName: 'Jonas',
      lastName: 'Butterworth',
      dateCreated: new Date('2018-11-29T15:05:38.9151244-05:00'),
      temperature: 4,
      coachID: '0',
      coachName: 'Alex',
      calcDate: new Date('12-01-2018'),
      dateString: 'Dec 1, 2018'
    },
    {
      applicationEntityId: 'guid',
      firstName: 'Mike',
      lastName: 'Jones',
      dateCreated: new Date('2018-11-29T15:05:38.9151244-05:00'),
      temperature: 7,
      coachID: '0',
      coachName: 'Alex',
      calcDate: new Date('11-15-2018'),
      dateString: 'Nov 15, 2018'
    }
  ];

    this._admissionService.getAllApplicants().subscribe((leads: Lead[]) => {
      leads.forEach(lead => {
        lead.calcDate = new Date(lead.dateCreated.toString());
        lead.dateString = `${monthNames[lead.calcDate.getMonth()]} ${lead.calcDate.getDate()}, ${lead.calcDate.getFullYear()}`;
      });
      this.dataSource = leads;
      this.seededUsers.forEach(user => {
        this.dataSource.push(user);
      });
    });
  }

  // Events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

