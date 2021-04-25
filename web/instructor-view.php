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
    <link rel='stylesheet' href='./static/css/instructor-notes.css'>
    <title>Instructor's View</title>
</head>
<body>
    <?php include './fragments/header.php';?>
    <div id='app'>
        <div id='inst-head'>
            <h1>Instructor View</h1>
        </div>
        <hf-instructor-step></hf-instructor-step>
        <div class='inst-confirm'>
                <hf-notes></hf-notes>
        </div>
        
        </div>
       
    </div>


    <script src='./components/dropdown.js'></script>
    <script src='./components/calendar.js'></script>
    <script src='./components/instructor-notes.js'></script>
    <script src='./components/instructor-step.js'></script>
    <script>
        new Vue({
            el: "#app",
            components: {
                'hf-dropdown': hfDropdown,
                'hf-calendar': hfCalendar,
                'hf-notes': hfNotes,
                'hf-instructor-step': hfInstructorStep
            }
        });
    </script>
</body>
</html>