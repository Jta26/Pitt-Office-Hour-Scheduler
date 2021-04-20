const hfTimeList = {
    data: function() {
        return {
            selectedTimeslot: null,
            mutableDays: []
        }
    },
    props: {
        days: Array/Object,
    },
    methods: {
        onTimeSelect: function(event, timeslot) {
            if (timeslot.status === true) {
                this.selectedTimeslot = timeslot;
                this.$emit('timeSelected', this.selectedTimeslot);
                console.log(timeslot);
            }
            else {
                //handle error
            }
        },
        clearTime: function(event) {
            this.selectedTimeslot = null;
        }
    },
    mounted: function() {
        // could potentially make the submit component emit errors to these components. this.$root.on('timeslotError', err => { this.handleError()})
    },
    created: function() {
        this.mutableDays = this.days;
    },
    template: `
        <div>
            <div  v-if="selectedTimeslot == null">
                <h2>Choose a day and time that works for you.</h2>
                <div v-for="day in mutableDays" :key="day.timestamp" class='time-list-day'>
                    <h2>{{ day.timestamp }}</h2>
                    <hr/>
                    <div class='timeslots-container'>
                        <div 
                            :class="(timeslot.status) ? 'timeslot available shadowed-hover' : 'timeslot filled'"
                            v-for="timeslot in day.timeslots" 
                            :key="timeslot.timestamp"
                            v-on:click="onTimeSelect($event, timeslot)"
                            >
                            <p>{{ timeslot.timestamp }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class='selected-time' v-if="selectedTimeslot != null">
                <h1><span><button v-on:click="clearTime">Edit</button></span>Selected Time: <span class='time-highlight'>{{ selectedTimeslot.timestamp }}</span></h1>
            </div>
        </div>
    `
};
