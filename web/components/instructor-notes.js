const hfNotes = {
    data: function() {
        return {
            timeslotSelection: null,
            noteData: ''
        }
    },
    props: {
        
    },
    methods: {
        emitNotesChanged: function(event) {
            this.$root.$emit('notesChanged', this.noteData);
        },
        clearNotes: function(event) {
            this.noteData = null;
            this.timeslotSelection = null;
            this.$root.$emit('clearTimeslotSelection');
        }
    },
    created: function() {
        
    },
    mounted: function() {
        this.$root.$on('updateInstructorNotes', data => {
            this.noteData = data;
        })
        this.$root.$on('updateTimeslotSelection', data => {
            console.log(data);
            this.timeslotSelection = data;
        })
    },
    template: `
        <div class='hf-notes' v-if="timeslotSelection != null">
            <button class='back-button' v-on:click="clearNotes"><img src='./assets/backarrow.png'/> <h3>Go Back</h3></button>
            <h2>Selected Timeslot:</h2>
            <h3>{{ timeslotSelection.fullString }}</h3>
            <h3>With {{ timeslotSelection.student.name }} ({{ timeslotSelection.student.id }})</h3>
            <p class='commentHead'>Student Comment:</p>
            <p class='comment'>&quot;{{ timeslotSelection.student_note }}&quot;</p>
            <h2>Office Hour Notes:</h2>
            <textarea rows="7" cols="100" v-model="noteData" @input="emitNotesChanged" placeholder="Enter Text Here"></textarea>
            <div>
                <button class='editNotes'>Edit Notes</button>
            </div>
            
        </div>
    `
};
