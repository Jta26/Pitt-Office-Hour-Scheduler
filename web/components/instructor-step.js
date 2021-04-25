

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
                        timestamp: '2021-04-23T19:15:53+00:00',
                        timeslots: [
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                        
                        ],

                    },
                    {
                        timestamp: '2021-04-26T19:15:53+00:00',
                        timeslots: [
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                student: 'JTA26',
                                studentComment: 'I need help with Homework 3',
                                status: false
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                        
                        ],

                    },
                    {
                        timestamp: '2021-04-27T19:15:53+00:00',
                        timeslots: [
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                student: 'JTA26',
                                studentComment: 'I need help with Homework 3',
                                status: false
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                student: 'JTA26',
                                studentComment: 'I need help with Homework 3',
                                status: false
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                student: 'JTA26',
                                studentComment: 'I need help with Homework 3',
                                status: false
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                student: 'JTA26',
                                studentComment: 'I need help with Homework 3',
                                status: false
                            },
                            {
                                timestamp: '2011-10-05T14:48:00.000Z',
                                status: true
                            },
                        
                        ],

                    }
                ]"></hf-calendar>

        </div>
        </div>
        </div>
    `
    
}