<?php
	// given a query string containing a "title", "course_code", and "term_code" corresponding to a course, this will return a list of students enrolled in that course
	$json_s = file_get_contents("courses.json");
	$json = json_decode($json_s, TRUE);

	$title = $_GET['title'];
	$course_code = $_GET['course_code'];
	$term_code = $_GET['term_code'];

	foreach($json as $course){
		if($course["title"] == $title && $course["course_code"] == $course_code && $course["term"] == $term_code){
			echo json_encode($course["students"]);
		}
	}

?>