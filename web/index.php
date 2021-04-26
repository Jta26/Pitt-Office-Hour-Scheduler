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
    <link rel='stylesheet' href='./static/css/step.css'>
    <link rel='stylesheet' href='./static/css/course-selection.css'>
    <link rel='stylesheet' href='./static/css/student-selection.css'>
    <link rel='stylesheet' href='./static/css/hf-dropdown.css'>
    <link rel='stylesheet' href='./static/css/timeslot-list.css'>
    <link rel='stylesheet' href='./static/css/notes.css'>
    <link rel='stylesheet' href='./static/css/submit.css'>
    <link rel='stylesheet' href='./static/css/error.css'>
    <title>Office Hour Scheduler</title>
</head>
<body>
    <?php include './fragments/header.php';?>
    <div id='app'>
        <div id='step'>
            <div id='course-selection'>
                    <hf-dropdown placeholder="Search Courses" :item-list="
                            [{name: 'CS 0045: Data Structres'},
                            {name: 'CS 0046: Algorithms'}]"
                            dropdown-context='courseSelection'
                            dropdown-label='Select a Course: '
                    >
                    </hf-dropdown>
                
                </span></p>
            </div>
            <div id='student-selection'>
                    <span>
                        <hf-dropdown placeholder="Search Students" :item-list="[]"
                            dropdown-context='studentSelection'
                            dropdown-label='Select Student Name: '
                        >
                        </hf-dropdown>
                    </span>
                </p>
            </div>
            <div id='time-selection'>
                <hf-time-list :days="
                    [
                        {
                            timestamp: '2021-04-26T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-26T19:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-26T19:30:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-26T20:00:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-26T20:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-26T21:00:00.000Z',
                                    status: false
                                },
                            
                            ],

                        },
                        {
                            timestamp: '2021-04-27T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-27T18:00:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-27T18:30:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-27T19:00:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-27T19:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-27T20:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-27T20:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-27T21:00:00.000Z',
                                    status: true
                                },
                            
                            ],

                        },
                        {
                            timestamp: '2021-04-29T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-29T18:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T18:30:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-29T19:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T19:30:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-29T20:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T20:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-29T21:00:00.000Z',
                                    status: false
                                },
                            ]
                        },
                        {
                            timestamp: '2021-04-30T12:00:00.000Z',
                            timeslots: [
                                {
                                    timestamp: '2021-04-30T18:00:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-30T18:30:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-30T19:00:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-30T19:30:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2021-04-30T20:00:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-30T20:30:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2021-04-30T21:00:00.000Z',
                                    status: true
                                },
                            ]
                        }
                    ]
                ">

                </hf-time-list>
                <hf-notes></hf-notes>
                <hf-error></hf-error>
                <hf-submit></hf-submit>
            </div>
        </div>
    </div>
    <script src='./components/dropdown.js'></script>
    <script src='./components/timeslot-list.js'></script>
    <script src='./components/notes.js'></script>
    <script src='./components/submit.js'></script>
    <script src='./components/error.js'></script>
    <script>
        new Vue({
            el: "#app",
            components: {
                'hf-dropdown': hfDropdown,
                'hf-time-list': hfTimeList,
                'hf-notes': hfNotes,
                'hf-submit': hfSubmit,
                'hf-error': errorHandler
            }
        });
    </script>
</body>
</html>