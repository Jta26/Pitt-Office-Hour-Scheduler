function isNullOrWhitespace( input ) {

    if (typeof input === 'undefined' || input == null) return true;

    return input.replace(/\s/g, '').length < 1;
}



const hfSubmit = {
    data: function() {
        return {
            studentSelection: '',
            courseSelection: '',
            timeslotSelection: null,
            notes: ''
        }
    },
    props: {
        
    },
    methods: {
        onSubmit: function(event) {
            // takes the data of this component and schedules an office hour for the student.
            // if the reply from the php file is 200, then we successfully scheduled office hours
            if (!isNullOrWhitespace(this.studentSelection) || !isNullOrWhitespace(courseSelection)) {
                if (timeslotSelection != null) {
                    // make the network request
                }
                else {
                    // please select a timeslot.
                }
            }
            else {
                //please select a course or student name.
            }


        }
    },
    mounted: function() {
        // these listen for the events that are emitted onto the root element by the other components.
        this.$root.$on('courseSelection', data=> {
            console.log('selected course', data.name);
            this.courseSelection = data.name;
        });
        this.$root.$on('studentSelection', data => {
            console.log('selected student', data.name);
            this.studentSelection = data;
        });
        this.$root.$on('timeslotSelection', data => {
            console.log('timeslot selected', data.timestamp);
            this.timeslotSelection = {status: data.status, timestamp: data.timestamp};
        });
        this.$root.$on('notesChanged', data => {
            console.log('notes updated', data);
            this.notes = data;
        })
    },
    template: `
        <div class='hf-submit'>
            <button class='shadowed-hover'>Schedule</button>
        </div>
    `
};
