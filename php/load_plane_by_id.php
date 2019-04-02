<?php

	require("loader_json_class.php");

	$id_plane = $_POST["id_plane"];
	
	$loader = new LoaderJson();
	
	echo $loader->loadPlaneById($id_plane);

?>