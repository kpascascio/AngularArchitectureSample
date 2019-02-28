import { Observable } from 'rxjs';
import { Applicant, ApplicantStatus } from '../../../shared/models/admissions/applicant';

const mockApplicantsData = [{
  'firstName': 'Ralph',
  'lastName': 'Machio',
  'lastContact': 'Nicky',
  'email': 'rmachio@gmail.com',
  'phone': '7772223333',
  'status': ApplicantStatus.QUALIFIED,
  'address': {
    'street': '12175 Visionary Way',
    'city': 'Fishers',
    'state': 'IN',
    'zipCode': 46038
  }
}, {
  'firstName': 'Nicky',
  'lastName': 'Machio',
  'lastContact': 'Nicky',
  'email': 'rmachio@gmail.com',
  'phone': '7772223333',
  'status': ApplicantStatus.QUALIFIED,
  'address': {
    'street': '12175 Visionary Way',
    'city': 'Fishers',
    'state': 'IN',
    'zipCode': 46038
  }
},
{
  'firstName': 'Ralph',
  'lastName': 'Machio',
  'lastContact': 'Nicky',
  'email': 'rmachio@gmail.com',
  'phone': '7772223333',
  'status': ApplicantStatus.VISIT,
  'address': {
    'street': '12175 Visionary Way',
    'city': 'Fishers',
    'state': 'IN',
    'zipCode': 46038
  }
},
{
  'firstName': 'Tom',
  'lastName': 'Machio',
  'lastContact': 'Nicky',
  'email': 'rmachio@gmail.com',
  'status': ApplicantStatus.QUALIFIED,
  'phone': '7772223333',
  'address': {
    'street': '12175 Visionary Way',
    'city': 'Fishers',
    'state': 'IN',
    'zipCode': 46038
  }
},
{
  'firstName': 'Ralph',
  'lastName': 'Machio',
  'lastContact': 'Nicky',
  'email': 'rmachio@gmail.com',
  'status': ApplicantStatus.QUALIFIED,
  'phone': '7772223333',
  'address': {
    'street': '12175 Visionary Way',
    'city': 'Fishers',
    'state': 'IN',
    'zipCode': 46038
  }
}];

export function sequenceSubscriber(observer) {
  mockApplicantsData.forEach((applicant: Applicant) => {
    observer.next(applicant);
  });

  observer.complete();
  return {unsubscribe() {}};
}

export default mockApplicantsData;
