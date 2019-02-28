

export const mockAdmissionEventsData = {
    'data': [
        {
            'type': 'events',
            'id': 'BGEVZCLL5BTS2ZFN',
            'attributes': {
                'uuid': 'BGEVZCLL5BTS2ZFN',
                'start_time': '2019-02-04T19:00:00Z',
                'end_time': '2019-02-04T19:30:00Z',
                'duration': 30,
                'created_at': '2019-01-30T02:16:39Z',
                'canceled': false,
                'invitees_count': 1
            },
            'relationships': {
                'event_type': {
                    'data': {
                        'type': 'event_types',
                        'id': 'FEBDQR42YRNEBBDX'
                    }
                },
                'invitee': {
                    'data': {
                        'type': 'invitees',
                        'id': 'CHCX7243YK2LX6E6'
                    }
                }
            }
        },
        {
            'type': 'events',
            'id': 'FGHUW4ZOQQEYKN2Q',
            'attributes': {
                'uuid': 'FGHUW4ZOQQEYKN2Q',
                'start_time': '2019-02-08T17:00:00Z',
                'end_time': '2019-02-08T17:30:00Z',
                'duration': 30,
                'created_at': '2019-01-24T18:39:08Z',
                'canceled': false,
                'invitees_count': 1
            },
            'relationships': {
                'event_type': {
                    'data': {
                        'type': 'event_types',
                        'id': 'FEBDQR42YRNEBBDX'
                    }
                },
                'invitee': {
                    'data': {
                        'type': 'invitees',
                        'id': 'AEEW7YO3AQPAWHCX'
                    }
                }
            }
        }
    ],
    'meta': {
        'total_count': 2,
        'total_pages': 1,
        'current_page': 1,
        'prev_page': null,
        'next_page': null
    },
    'included': [
        {
            'type': 'invitees',
            'id': 'CHCX7243YK2LX6E6',
            'attributes': {
                'name': 'Natasha Adjivon',
                'email': 'nadjivon@gmail.com'
            }
        },
        {
            'type': 'invitees',
            'id': 'AEEW7YO3AQPAWHCX',
            'attributes': {
                'name': 'Tia Hawkins',
                'email': 'tiahawkins33@gmail.com'
            }
        }
    ]
};
