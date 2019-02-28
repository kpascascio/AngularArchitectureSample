export class Application {
    FirstName: string;
    LastName: string;
    LevelOfInterest: number;

    Contact: ContactInfo;
    Demographic: DemographicInfo;
    Education: EducationInfo;
    Experience: ExperienceInfo;
  //  TrackChoice: TrackChoiceInfo;

    constructor () {}
}

interface ContactInfo {
    Phone: string;
    StreetAddress: string;
    City: string;
    State: string;
    Zip: string;
}

interface DemographicInfo {
    Gender: string;
    Ethnicity: string;
    Married: boolean;
    Veteran: boolean;
    GIBill: boolean;
    UseGIBill: boolean;
    SpouseOrVeteranDependant: boolean;
    Disabilities: boolean;
    DisabilitiesDescription: string;
    Felon: boolean;
    FelonyDescription: string;
}

interface EducationInfo {
    HighestEducation: string;
    HighSchoolGraduationInfo: string;
    CollegeGraduationInfo: string;
    FieldOfStudy: string;
    CurrentlyEnrolled: boolean;
}

interface ExperienceInfo {
    EmploymentStatus: string;
    IncomeLevel: string;
}

interface TrackChoiceInfo {
    TrackDecisionChoices: number[];
}
