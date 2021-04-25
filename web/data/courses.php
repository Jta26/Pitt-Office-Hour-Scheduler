<?php
	// This will return a list of dictionaries containing courses -- namely, their "title", "course_code", and "term" code
	$json_s = file_get_contents("courses.json");
	$json = json_decode($json_s, TRUE);

	$returned_courses = array();
	foreach($json as $course){
		// remove any data from courses.json that we don't want returned in a get request
		unset($course["students"]);
		array_push($returned_courses, $course);
	}

	echo json_encode($returned_courses);
?>