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
            <button>Schedule</button>
        </div>
    `
};
