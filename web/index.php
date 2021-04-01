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
    <title>Office Hour Scheduler</title>
</head>
<body>
    <?php include './fragments/header.php';?>
    <div id='app'>
        <div id='course-selection'>
            <p><b>Select a Course:</b> <span><course-selection></course-selection></span></p>
        </div>
        <div id='student-selection'>
            <p><b>Select Student Name:</b> <span><course-selection></course-selection></span></p>
        </div>
    </div>

    <script src='./components/courseSelection.js'></script>
</body>
</html>