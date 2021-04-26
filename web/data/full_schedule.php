<?php 
	$json_s = file_get_contents("schedule.json");
	$json = json_decode($json_s, TRUE);

	$sched = array();
	foreach($json as $day){
		$timeslots = array();
		foreach($day["timeslots"] as $app){
			if(array_key_exists("student",$app)){
				//$app["student"] = $app["student"]["id"];
				$app["status"] = false;
			}else{
				$app["status"] = true;
			}
			array_push($timeslots, $app);
		}
		$day["timeslots"] = $timeslots;
		array_push($sched, $day);
	}

	echo json_encode($sched);
?>