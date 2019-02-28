import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTabComponent } from './shared-tab.component';
import mockAssignmentData from '../../../core/mocks/shared/assignment';

describe('SharedTabComponent', () => {
  let component: SharedTabComponent;
  let fixture: ComponentFixture<SharedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the assignment name in an h1 tag', () => {
    component.step = 'python';

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Python');
  });

  it('should render the assignment details from the passed in Array', () =>  {
    component.arrayOfData = mockAssignmentData;
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('a').textContent
    ).toContain(mockAssignmentData[0].assignmentName);
  });
});
