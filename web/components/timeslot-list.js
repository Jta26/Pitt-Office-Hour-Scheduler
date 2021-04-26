const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
                this.$root.$emit('timeslotSelection', this.selectedTimeslot);
            }
            else {
                //handle error
            }
        },
        clearTime: function(event) {
            this.selectedTimeslot = null;
            this.$root.$emit('timeslotSelection', null);
        }
    },
    mounted: function() {
        // could potentially make the submit component emit errors to these components. this.$root.on('timeslotError', err => { this.handleError()})
    },
    created: async function() {
        const apiResult = await fetch('/data/schedule.php');
        const scheduleData = await apiResult.json();
        this.mutableDays = scheduleData;
        //this.mutableDays = this.days;
        for (let day of this.mutableDays) {
            day.dateObj = new Date(day.timestamp);
            day.dateString = `${dayNames[day.dateObj.getDay()]}, ${monthNames[day.dateObj.getMonth()]} ${day.dateObj.getDate()}, ${day.dateObj.getFullYear()} `;
            // double for loop is unopotimal, but it's fine because it's very rare that we will have more than 10 timeslots per day, so processing should always be at a minimum.
            for (let timeslot of day.timeslots) {
                timeslot.dateObj = new Date(timeslot.timestamp);
                timeslot.timeString = `${timeHelpers.formatAMPM(timeslot.dateObj)}`;
                timeslot.fullString = `${timeslot.timeString} on ${day.dateString}`;
            }
        }
    },
    template: `
        <div>
            <div v-if="selectedTimeslot == null">
                <h2>Choose a day and time that works for you.</h2>
                <div v-for="day in mutableDays" :key="day.timestamp" class='time-list-day'>
                    <h2>{{ day.dateString }}</h2>
                    <hr/>
                    <div class='timeslots-container'>
                        <div 
                            :class="(timeslot.status) ? 'timeslot available shadowed-hover' : 'timeslot filled'"
                            v-for="timeslot in day.timeslots" 
                            :key="timeslot.timestamp"
                            v-on:click="onTimeSelect($event, timeslot)"
                            >
                            <p>{{ timeslot.timeString }} - {{ (timeslot.status) ? 'Available' : 'Taken' }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class='selected-time' v-if="selectedTimeslot != null">
                
                <button v-on:click="clearTime" title="Click to edit">
                    <img src='./assets/pencil.png' alt='a pencil icon'/>
                    <h1>Selected Time: <span class='time-highlight'>{{ selectedTimeslot.fullString }}</span></h1>
                </button>
            </div>
        </div>
    `
};
