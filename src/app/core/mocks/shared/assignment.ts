import { Observable } from 'rxjs';
import { Assignment, Track } from '../../../shared/models/assignment/assignment';

const mockAssignmentData: Assignment[] = [
    {
        assignmentName: 'HTML Fundamentals',
        assignmentNumber: 0,
        assignmentURL: 'https://eleven-fifty-academy.gitbook.io/dotnet-100-prework-gitbook/',
        badge: 0,
        track: Track.PYTHON,
        instructorID: 0
    }, {
        assignmentName: 'CSS Fundamentals',
        assignmentNumber: 0,
        assignmentURL: 'https://eleven-fifty-academy.gitbook.io/dotnet-100-prework-gitbook/',
        badge: 0,
        track: Track.PYTHON,
        instructorID: 0
    }, {
        assignmentName: 'JavaScript Fundamentals',
        assignmentNumber: 0,
        assignmentURL: 'https://eleven-fifty-academy.gitbook.io/dotnet-100-prework-gitbook/',
        badge: 0,
        track: Track.JAVASCRIPT,
        instructorID: 0
    }, {
        assignmentName: 'CSS Fundamentals',
        assignmentNumber: 0,
        assignmentURL: 'https://eleven-fifty-academy.gitbook.io/dotnet-100-prework-gitbook/',
        badge: 3,
        instructorID: 0,
        track: Track.DOTNET
    }, {
        assignmentName: 'Booeys assignment',
        assignmentNumber: 0,
        assignmentURL: 'https://eleven-fifty-academy.gitbook.io/dotnet-100-prework-gitbook/',
        badge: 0,
        instructorID: 0,
        track: Track.GENERALASSIGNMENT
    }
];

// only returns the assignments that are in white badge
export function mockAssignmentDataObservable(observer) {
    mockAssignmentData.forEach((assignment: Assignment) => {
        if (assignment.badge === 0) {
            observer.next(assignment);
        }
    });

    observer.complete();
    return { unsubscribe() { } };
}

export default mockAssignmentData;
