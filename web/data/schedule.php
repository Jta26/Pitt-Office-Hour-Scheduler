<?php 
	// This file handles two functions
	// GET: Returns a list of dictionaries containing information about available appointments
	// POST: schedule an appointment with a student id (named "student"), time, and note
	$json_s = file_get_contents("schedule.json");
	$json = json_decode($json_s, TRUE);

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$post_data = json_decode(file_get_contents('php://input'), true);
		$student_id = $post_data['student'];
		$student = array();
		$time = $post_data['time'];
		$note = $post_data['note'];

		//todo: check if valid student
		$is_valid = false;
		$courses_s = file_get_contents("courses.json");
		$courses_json = json_decode($courses_s, TRUE);
		foreach($courses_json as $course){
			foreach($course["students"] as $st){
				if($st["id"] == $student_id){
					$student = $st;
					$is_valid = true;
				}
			}
		}

		if(!$is_valid){
			http_response_code(401);
			exit("Student not in records.\n");
		}

		$time_available = false;
		for($i = 0; $i < count($json); $i++){
			for($j = 0; $j < count($json[$i]["timeslots"]); $j++){
				if($json[$i]["timeslots"][$j]["timestamp"] == $time && !array_key_exists("student",$json[$i]["timeslots"][$j])){
					$json[$i]["timeslots"][$j]["student"] = $student;
					$json[$i]["timeslots"][$j]["student_note"] = $note;
					$time_available = true;
				}
			}
		}

		if(!$time_available){
			http_response_code(401);
			exit("Appointment time unavailable.\n");
		}

		$write_file = fopen("schedule.json", "w");
		fwrite($write_file, json_encode($json));

		http_response_code(201);
	}else{
		$sched = array();
		foreach($json as $day){
			$timeslots = array();
			foreach($day["timeslots"] as $app){
				if(array_key_exists("student",$app)){
					$app["status"] = false;
					unset($app["student"]);
				}else{
					$app["status"] = true;
				}
				array_push($timeslots, $app);
			}
			$day["timeslots"] = $timeslots;
			array_push($sched, $day);
		}

		echo json_encode($sched);
	}
?>