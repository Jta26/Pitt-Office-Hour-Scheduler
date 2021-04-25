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
            console.log(this.studentSelection, this.courseSelection, this.timeslotSelection)
            if (!isNullOrWhitespace(this.studentSelection) && !isNullOrWhitespace(this.courseSelection)) {
                if (this.timeslotSelection != null) {
                    // make the network request
                    console.log('test')
                    this.$root.$emit('clearErrorMessage');
                }
                else {
                    // please select a timeslot.
                    this.$root.$emit('clearErrorMessage');
                    this.$root.$emit('updateErrorMessage', 'Please Select a timeslot');
                }
            }
            else {
                //please select a course or student name.
                this.$root.$emit('clearErrorMessage');
                this.$root.$emit('updateErrorMessage', 'Please Select a student and course name');
            }


        }
    },
    mounted: function() {
        // these listen for the events that are emitted onto the root element by the other components.
        this.$root.$on('courseSelection', data => {
            if (data != null) {
                this.courseSelection = data.name;
            }
            else {
                this.courseSelection = null;
            }
        });
        this.$root.$on('studentSelection', data => {
            if (data != null) {
                this.studentSelection = data.name;
            }
            else {
                this.studentSelection = null;
            }
        });
        this.$root.$on('timeslotSelection', data => {
            if (data != null) {
                this.timeslotSelection = {status: data.status, timestamp: data.timestamp};
            }
            else {
                this.timeslotSelection = null;
            }
        });
        this.$root.$on('notesChanged', data => {
            this.notes = data;
        })
    },
    template: `
        <div class='hf-submit'>
            <button class='shadowed-hover' v-on:click="onSubmit">Schedule</button>
        </div>
    `
};
