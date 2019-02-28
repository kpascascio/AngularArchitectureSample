export enum Badge {
    WHITEBADGE = 0,
    GOLDBADGE,
    BLUEBADGE,
    REDBADGE,
    PURPLEBADGE,

}

export enum Track {
    PYTHON= 'python',
    DOTNET = '.net',
    JAVASCRIPT = 'javascript',
    GENERALASSIGNMENT = 'general assignment'
}

export class Assignment {
    assignmentURL: string;
    assignmentNumber: number;
    assignmentName: string;
    track: Track;
    badge: Badge;
    instructorID?: number;

    constructor () {}
}
