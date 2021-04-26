<?php
	// given a query string containing a course code ("course") corresponding to a course, this will return a list of students enrolled in that course
	$json_s = file_get_contents("courses.json");
	$json = json_decode($json_s, TRUE);

	$course_code = $_GET['course'];

	foreach($json as $course){
		if($course["course_code"] == $course_code){
			echo json_encode($course["students"]);
		}
	}

?>