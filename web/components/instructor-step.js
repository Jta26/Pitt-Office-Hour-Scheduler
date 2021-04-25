

const hfInstructorStep = {
    data: function() {
        return {
            isVisible: true
        }
    },
    methods: {
        getCalendarData: function() {
            // makes network request for calendar data based on current date or search user
            // also will bucket the calendar data into months and generate the according calendars
            // if no search is specified, then this should return the current month, or the current month and the next if
            // the current day is 20+.

            // maybe show search results in reverse chronological order so the more recent office hours appear highest.
        }
    },
    mounted: function() {
        this.$root.$on('updateTimeslotSelection', data => {
            this.isVisible = false;
        });
        this.$root.$on('clearTimeslotSelection', data => {
            this.isVisible = true;
        });
    },
    components: {
        'hf-calendar': hfCalendar,
    },
    template: `
        <div v-if="isVisible">
        <div id='inst-selection'>
        <div class='cal'>
        <h2>Upcoming Office hours</h2>
        <p>Click a timeslot to view/edit notes.</p>
        <hf-calendar type='INST' :days="
                 [
                        {
                            timestamp: '2021-04-26T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-26T19:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-26T19:30:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-26T20:00:00.000Z',
                                    status: false,
                                    student: 'JTA26',
                                    studentComment: 'Im looking for help on homework 3.'
                                },
                                {
                                    timestamp: '2021-04-26T20:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-26T21:00:00.000Z',
                                    status: false,
                                    student: 'KCH46',
                                    studentComment: 'I did not understand a topic from the lecture today.'
                                },
                            
                            ],

                        },
                        {
                            timestamp: '2021-04-27T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-27T18:00:00.000Z',
                                    status: false,
                                    student: 'KCH46',
                                    studentComment: 'Research Topic Investigation'
                                },
                                {
                                    timestamp: '2021-04-27T18:30:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-27T19:00:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-27T19:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-27T20:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-27T20:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-27T21:00:00.000Z',
                                    status: true
                                },
                            
                            ],

                        },
                        {
                            timestamp: '2021-04-29T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-29T18:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T18:30:00.000Z',
                                    status: false,
                                    student: 'JTA26',
                                    studentComment: 'Weekly meeting about project'
                                },
                                {
                                    timestamp: '2021-04-29T19:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T19:30:00.000Z',
                                    status: false,
                                    student: 'JSZ55',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-29T20:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T20:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T21:00:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                            ]
                        },
                        {
                            timestamp: '2021-04-30T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-30T18:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-30T18:30:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-30T19:00:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-30T19:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-30T20:00:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-30T20:30:00.000Z',
                                    status: false,
                                    student: 'PCH64',
                                    studentComment: 'I would like to have you go over my research thesis.'
                                },
                                {
                                    timestamp: '2021-04-30T21:00:00.000Z',
                                    status: true
                                },
                            ]
                        }
                    ]"></hf-calendar>

        </div>
        </div>
        </div>
    `
    
}