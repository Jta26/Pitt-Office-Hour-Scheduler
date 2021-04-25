const hfNotes = {
    data: function() {
        return {
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
        }
    },
    created: function() {
        
    },
    template: `
        <div class='hf-notes'>
            <h2>What are you looking for help with?</h2>
            <textarea rows="7" cols="100" v-model="noteData" @input="emitNotesChanged" placeholder="Enter Text Here"></textarea>
        </div>
    `
};
