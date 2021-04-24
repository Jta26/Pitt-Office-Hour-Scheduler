<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='./static/js/vue-dev.js'></script>
    <script src='./static/js/timeHelpers.js'></script>
    <link rel='stylesheet' href='./static/css/global.css'>
    <link rel='stylesheet' href='./static/css/header.css'>
    <link rel='stylesheet' href='./static/css/instructor.css'>
    <link rel='stylesheet' href='./static/css/calendar.css'>
    <link rel='stylesheet' href='./static/css/tooltip.css'>
    <title>Instructor's View</title>
</head>
<body>
    <?php include './fragments/header.php';?>
    <div id='app'>
        <div id='inst-head'>
            <h1>Instructor View</h1>
        </div>
        <div id='inst-selection'>
            <div class='cal'>
            <h2>Upcoming Office hours</h2>
            <p>Click a timeslot to view edit notes.</p>
            <hf-calendar type='INST' :days="
                    [
                        {
                            timestamp: '2021-04-23T19:15:53+00:00',
                            timeslots: [
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                            
                            ],

                        },
                        {
                            timestamp: '2021-04-26T19:15:53+00:00',
                            timeslots: [
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    student: 'JTA26',
                                    studentComment: 'I need help with Homework 3',
                                    status: false
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                            
                            ],

                        },
                        {
                            timestamp: '2021-04-27T19:15:53+00:00',
                            timeslots: [
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    student: 'JTA26',
                                    studentComment: 'I need help with Homework 3',
                                    status: false
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    student: 'JTA26',
                                    studentComment: 'I need help with Homework 3',
                                    status: false
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    student: 'JTA26',
                                    studentComment: 'I need help with Homework 3',
                                    status: false
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    student: 'JTA26',
                                    studentComment: 'I need help with Homework 3',
                                    status: false
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                            
                            ],

                        }
                    ]"></hf-calendar>

            </div>
            <div class='inst-confirm'>

            </div>
        
        </div>
       
    </div>


    <script src='./components/dropdown.js'></script>
    <script src='./components/timeslot-list.js'></script>
    <script src='./components/calendar.js'></script>
    <script>
        new Vue({
            el: "#app",
            components: {
                'hf-dropdown': hfDropdown,
                'hf-time-list': hfTimeList,
                'hf-calendar': hfCalendar
            }
        });
    </script>
</body>
</html>