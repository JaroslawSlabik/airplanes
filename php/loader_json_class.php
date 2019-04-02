<?php

	class LoaderJson
	{
		private $path_to_json;
		
		public function __construct($path = "..\\resources\\planes.json")
		{
			$this->path_to_json = $path;
			session_start();
		}
		
		public function loadAllPlanes()
		{
			$json = $this->loadJsonFromFile($this->path_to_json);
			
			if(false == isset($_SESSION['samolot_id']) || -1 == $_SESSION['samolot_id'])
			{
				$json['saved_id'] = -1;
			}
			else
			{
				$json['saved_id'] = $_SESSION['samolot_id'];
			}
			
			return json_encode($json);
		}
		
		public function loadPlaneById($id)
		{
			$json = $this->loadJsonFromFile($this->path_to_json);
			
			foreach($json as $id_a => $array)
			{
				foreach($array as $key => $value)
				{
					if($key == "id" && $value == $id)
					{
						$_SESSION['samolot_id'] = $id;

						return json_encode($array);
					}
				}
			}
			
			$_SESSION['samolot_id'] = -1;
			
			return json_encode(array());
		}
		
		private function loadJsonFromFile($path)
		{
			$json_content = file_get_contents($path);
			
			$json = json_decode($json_content, true);
			
			return $json['planes'];
		}
	}
	
?>