import { Address } from '../address';

export enum ApplicantStatus {
    QUALIFIED = 'qualified',
    VISIT = 'visit',
    FINANCIAL_PLAN = 'financial plan',
    CLOSE = 'close',
    FIRST_TOUCH = 'first touch'
}
export interface Applicant {
    firstName: string;
    lastName: string;
    lastContact: string;
    status: ApplicantStatus;
    email: string;
    phone: string;
    address: Address;

}


export interface ApplicantFromDatabase {
    applicants: Applicant[];
}
