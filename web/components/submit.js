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
        onSubmit: async function(event) {
            // takes the data of this component and schedules an office hour for the student.
            // if the reply from the php file is 200, then we successfully scheduled office hours
            if (!isNullOrWhitespace(this.studentSelection) && !isNullOrWhitespace(this.courseSelection)) {
                if (this.timeslotSelection != null) {
                    // make the network request
                    this.$root.$emit('clearErrorMessage');
                    const apiResult = await fetch("/data/schedule.php", {method: 'POST', body: JSON.stringify({"student": this.studentSelection, "time" : this.timeslotSelection, "note": this.notes}), credentials: 'same-origin'});
                    if(apiResult.status == 201){
                        // acknowledge successful appointment here
                    } else {
                        this.$root.$emit('updateErrorMessage', 'Server issue... try refreshing the page.');
                    }
                    //this.$root.$emit('updateErrorMessage', '');
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
                this.studentSelection = data.id;
            }
            else {
                this.studentSelection = null;
            }
        });
        this.$root.$on('timeslotSelection', data => {
            if (data != null) {
                this.timeslotSelection = data.timestamp;
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
