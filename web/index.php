<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='./static/js/vue-dev.js'></script>
    <link rel='stylesheet' href='./static/css/global.css'>
    <link rel='stylesheet' href='./static/css/header.css'>
    <link rel='stylesheet' href='./static/css/course-selection.css'>
    <link rel='stylesheet' href='./static/css/student-selection.css'>
    <link rel='stylesheet' href='./static/css/hf-dropdown.css'>
    <title>Office Hour Scheduler</title>
</head>
<body>
    <?php include './fragments/header.php';?>
    <div id='app'>
        <div id='course-selection'>
            <p><b>Select a Course:</b> <span>

                <hf-dropdown placeholder="Search Courses" :item-list="
                        [{name: 'CS 0045: Data Structres'},
                        {name: 'CS 0046: Algorithms'}]"></hf-dropdown>
            
            </span></p>
        </div>
        <div id='student-selection'>
            <p><b>Select Student Name:</b> 
                <span>
                    <hf-dropdown placeholder="Search Students" :item-list="
                        [{name: 'Joel Austin', id:'JTA26'},
                        {name: 'Kacey Hirt', id:'KCH26'},{name: 'Jose Zindia', id:'JDZ26'},{name: 'Pat Healy', id:'PCH26'},]"
                    >
                    </hf-dropdown>
                </span>
            </p>
        </div>
        <div id='time-selection'>

            <h2>Choose a day and time that works for you.</h2>

        </div>

        


    </div>
    <script src='./components/dropdown.js'></script>
</body>
</html>