<?php 
	// This file handles two functions
	// GET: Returns a list of dictionaries containing information about 
	$json_s = file_get_contents("schedule.json");
	$json = json_decode($json_s, TRUE);

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$student = $_POST['student'];
		$time = $_POST['time'];

		//todo: check if valid student
		$is_valid = false;
		$courses_s = file_get_contents("courses.json");
		$courses_json = json_decode($courses_s, TRUE);
		foreach($courses_json as $course){
			if(in_array($student, $course["students"])){
				$is_valid = true;
			}
		}

		if(!$is_valid){
			http_response_code(401);
			exit("Student not in records.\n");
		}

		$time_available = false;
		for($i = 0; $i < count($json); $i++){
			if($json[$i]["time"] == $time && $json[$i]["available"]){
				$json[$i]["student"] = $student;
				$json[$i]["available"] = false;
				$time_available = true;
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
		foreach($json as $app){
			//remove any data from schedule.json that we don't want to be returned in a get request
			unset($app["student"]);
			array_push($sched, $app);
		}

		echo json_encode($sched);
	}
?>