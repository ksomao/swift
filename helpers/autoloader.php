<?php
spl_autoload_register(function ($class) {
	$fileChecker = function ($folder) use ($class) {
		$file_path = "{$folder}{$class}.php";
		if (file_exists($file_path)) {
			require_once $file_path;
		}
	};
	array_map($fileChecker, $_ENV['AUTOLOAD_FOLDERS'], array_keys($_ENV));
});
