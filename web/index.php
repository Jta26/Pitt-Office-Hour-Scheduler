<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='./static/js/vue-dev.js'></script>
    <link rel='stylesheet' href='./static/css/global.css'>
    <link rel='stylesheet' href='./static/css/header.css'>
    <link rel='stylesheet' href='./static/css/step.css'>
    <link rel='stylesheet' href='./static/css/course-selection.css'>
    <link rel='stylesheet' href='./static/css/student-selection.css'>
    <link rel='stylesheet' href='./static/css/hf-dropdown.css'>
    <link rel='stylesheet' href='./static/css/timeslot-list.css'>
    <link rel='stylesheet' href='./static/css/notes.css'>
    <link rel='stylesheet' href='./static/css/submit.css'>
    <title>Office Hour Scheduler</title>
</head>
<body>
    <?php include './fragments/header.php';?>
    <div id='app'>
        <div id='step'>
            <div id='course-selection'>
                <p><b>Select a Course:</b> <span>

                    <hf-dropdown placeholder="Search Courses" :item-list="
                            [{name: 'CS 0045: Data Structres'},
                            {name: 'CS 0046: Algorithms'}]"
                            dropdown-context='courseSelection'
                    >
                    </hf-dropdown>
                
                </span></p>
            </div>
            <div id='student-selection'>
                <p><b>Select Student Name:</b> 
                    <span>
                        <hf-dropdown placeholder="Search Students" :item-list="
                            [{name: 'Joel Austin', id:'JTA26'},
                            {name: 'Kacey Hirth', id:'KCH26'},{name: 'Jose Zindia', id:'JDZ26'},{name: 'Pat Healy', id:'PCH26'},]"
                            dropdown-context='studentSelection'
                        >
                        </hf-dropdown>
                    </span>
                </p>
            </div>
            <div id='time-selection'>
                <hf-time-list :days="
                    [
                        {
                            timestamp: 'April 20, 2021',
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
                            timestamp: 'April 21, 2021',
                            timeslots: [
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                            
                            ],

                        },
                        {
                            timestamp: 'April 22, 2021',
                            timeslots: [
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: false
                                },
                                {
                                    timestamp: '2011-10-05T14:48:00.000Z',
                                    status: true
                                },
                            
                            ],

                        }
                    ]
                ">

                </hf-time-list>
                <!-- <hf-calendar :timeslots="
                    []
                
                
                
                "></hf-calendar> -->
                <hf-notes></hf-notes>
                <hf-submit></hf-submit>
            </div>
        </div>
    </div>
    <script src='./components/dropdown.js'></script>
    <script src='./components/timeslot-list.js'></script>
    <script src='./components/notes.js'></script>
    <script src='./components/submit.js'></script>
    <script>
        new Vue({
            el: "#app",
            components: {
                'hf-dropdown': hfDropdown,
                'hf-time-list': hfTimeList,
                'hf-notes': hfNotes,
                'hf-submit': hfSubmit
            }
        });
    </script>
</body>
</html>