
// component for rendering office hours in a "calendar-like" fashion. 
// create calendar-item sub-component
// pad days at the beginning and end of the office hours until we can fill a 5x5 grid like this
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// |    Mon      Tues      Wed      Thur     Fri      | 
// |    Mon      Tues      Wed      Thur     Fri      | 
// |    Mon      Tues      Wed      Thur     Fri      | 
// |    Mon      Tues      Wed      Thur     Fri      | 
// |    Mon      Tues      Wed      Thur     Fri      | 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// should be able to handle different types of calendars 
// i.e. instructor vs student

// student emits the event on $root to set the variable in the submit

// instructor only shows the "filled" timeslots as blue buttons that 
// cause state to recalculate to show the office hour notes edit screen.

// for this example, we would need to pad the beginning with the number of days
// from the first item to the first day of the month, then remove all weekdays

// !IMPORTANT!
// ALL TIMES SHOULD BE IN ISO-8601, WHICH IS ALWAYS IN UTC TIMEZONE


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const hfTooltip = {
    props: {
        tooltipData: Object
    },
    computed: {
        style() {
            return 'top: ' + this.tooltipData.positionY + 'px; ' + "left:" + this.tooltipData.positionX + 'px;';
        }
    },
    template: `
        <div class='hf-tooltip' :style="style">
            <h1>{{ tooltipData.header }}</h1>
            <h2>{{ tooltipData.subHeader }}</h2>
            <p class='colon'>{{ tooltipData.colon }}</p>
            <p class='colonContent'>&quot;{{ tooltipData.colonContent }}&quot;</p>
        </div>
    `
}


const hfCalendarItem = {
    data: function() {
        return {
            mutableDay: {},
            mutableTimeslots: [],
            tooltip: {}
        }
    },
    props: {
        day: Object,
        type: String,
        onTimeslotClick: Function
    },
    created: function() {
        if (this.day != null) {
            this.mutableDay = this.day;
            this.mutableDay.dateObj = new Date(this.mutableDay.timestamp);
            this.mutableDay.numDay = this.mutableDay.dateObj.getDate();
            this.mutableTimeslots = this.day.timeslots;
            if (this.mutableTimeslots != null) {

                for (let timeslot of this.mutableTimeslots) {
                    const timeslotDate = new Date(timeslot.timestamp);
                    timeslot.timeString = timeHelpers.formatAMPM(new Date(timeslot.timestamp));
                    timeslot.fullString = `
                    ${dayNames[timeslotDate.getDay()]}, 
                    ${monthNames[timeslotDate.getMonth()]} 
                    ${timeslotDate.getDate()} @ 
                    ${timeslot.timeString}`;
                }


            }   
        }
    },
    methods: {
        onTimeslotHover: function(event, timeslot) {
            if (this.type == 'INST') {
                if (timeslot.status == false) {
                    // show the tooltip, and bind it's position to the event location.
                    // and set the tooltip to the timeslot data
                    this.tooltip = {
                        shown: true,
                        header: 'Office Hours with ' + timeslot.student.name + " (" + timeslot.student.id + ")",
                        subHeader: timeslot.fullString,
                        colon: 'Student Comment:',
                        colonContent: timeslot.student_note,
                        positionX: event.layerX + 10,
                        positionY: event.layerY - 240
                    }

                }
            }
        },
        onTimeslotHoverLeave: function(event, timeslot) {
            if (this.type == 'INST') {
                if (timeslot.status == false) {
                    // hide the tooltip
                    this.tooltip = {}
                }
            }
        }
    },
    components: {
        'hf-tooltip': hfTooltip
    },
    template: `
        <div class='hf-calendar-item'>
            <h2>{{ mutableDay.numDay }}</h2>
            <div class='hf-calendar-timeslots'>
                <div v-if="type == 'INST'" :class="(timeslot.status) ? 'timeslot instructoravailable' : 'timeslot instructorfilled shadowed-hover'" 
                    v-on:mouseover="onTimeslotHover($event, timeslot)" 
                    v-on:mouseleave="onTimeslotHoverLeave($event, timeslot)"
                    v-on:click="(timeslot.status) ? null : onTimeslotClick($event, timeslot)"
                    v-for="timeslot in mutableDay.timeslots"
                >
                    <p>{{ timeslot.timeString }} <span v-if="timeslot.student != null">- {{ timeslot.student.name }}</span></p>
                </div>
            </div>
            <hf-tooltip v-if="tooltip.shown" :tooltip-data="tooltip"></hf-tooltip>
        </div>
    `,
}

const hfCalendar = {
    data: function() {
        return {
            mutableDays: [],
            padCount: 0,
            monthString: '',
            yearString: '',
        }
    },
    props: {
        days: Array/Object,
        type: String // should probably be Enum.
    },
    methods: {
        onTimeslotClick: function(event, timeslot) {
            console.log('timeslot clicked', timeslot);
            this.$root.$emit('updateTimeslotSelection', timeslot);
            this.$root.$emit('updateInstructorNotes', null);
        }
    },
    created: async function() {
        // on create, add days to the front or back depending on the first and last day.
        const apiResult = await fetch('/data/full_schedule.php');
        this.days = await apiResult.json();

        this.mutableDays = timeHelpers.fillMissingDays(this.days);
        this.padCount = timeHelpers.getPadBeginning(this.mutableDays);
        const date = new Date(this.mutableDays[0].timestamp);
        this.monthString = monthNames[date.getMonth()];
        this.yearString = date.getFullYear().toString();


    },
    components: {
        'hf-calendar-item': hfCalendarItem
    },
    template: `
        <div class='calendar'>
            <div class='hf-calendar-month'>
                <h1>{{ monthString }}, {{ yearString }}</h1>
                <hr/>
            </div>
            <div class='hf-calendar-header'>
                <p>Mon</p>
                <p>Tues</p>
                <p>Wed</p>
                <p>Thurs</p>
                <p>Fri</p>
            </div>
            <div class='hf-calendar'>
                <template v-for="i in padCount">
                    <hf-calendar-item></hf-calendar-item>
                </template>
                <template v-for="day in mutableDays"> 
                    <hf-calendar-item :type="type" :day="day" :onTimeslotClick="onTimeslotClick"></hf-calendar-item>
                </template>
            </div>
        </div>
    
    
    
    
    
    
    `
};