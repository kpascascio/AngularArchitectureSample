export class CalendlyEventResponse {
    data: CalendlyEvent[];
    meta?: {
        total_count: number,
        total_pages: number,
        current_page: number,
        prev_page: boolean,
        next_page: boolean
    };
    included?: Invitee[];

    public CalendlyEventResponse() {}
}

export class CalendlyEventTypes {
    type: string;
    id: string;
    attributes: CalendlyEventTypeAttribute;
}

interface CalendlyEventTypeAttribute {
    description: string;
    color: string;
    duration: number;
    created_at: Date;
    updated_at: Date;
    slug: string;
    active: boolean;
    location: string;
    name: string;
    url: string;
}

interface CalendlyEventAttribute {
    uuid: string;
    start_time: Date;
    end_time: Date;
    duration: number;
    created_at: Date;
    canceled: boolean;
    invitees_count: number;
}
export class CalendlyEvent {
    type: string;
    id: string;
    attributes: CalendlyEventAttribute;
    relationships: {
        event_type: {
            data: {
                type: string,
                id: string
            }
        },
        invitee: {
            data: Invitee;
        }
    };
}

export interface Invitee {
    type: string;
    id: string;
    attributes?: {
        name: string,
        email: string
    };

}
