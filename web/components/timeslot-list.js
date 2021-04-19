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
    created: function() {
        this.mutableDays = this.days;
    },
    template: `
        <div>
            <div v-for="day in mutableDays" :key="day.timestamp" class='time-list-day' v-if="selectedTimeslot == null">
                <h2>{{ day.timestamp }}</h2>
                <hr/>
                <div class='timeslots-container'>
                    <div 
                        :class="(timeslot.status) ? 'timeslot available' : 'timeslot filled'"
                        v-for="timeslot in day.timeslots" 
                        :key="timeslot.timestamp"
                        v-on:click="onTimeSelect($event, timeslot)"
                        >
                        <p>{{ timeslot.timestamp }}</p>
                    </div>
                </div>
            </div>
            <div class='selected-time' v-if="selectedTimeslot != null">
                <h1><span><button v-on:click="clearTime">Edit</button></span>Selected Time: <span class='time-highlight'>{{ selectedTimeslot.timestamp }}</span></h1>
            </div>
        </div>
    `
};
