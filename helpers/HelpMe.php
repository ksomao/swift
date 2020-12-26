<?php

class HelpMe
{
	public static function platformSlashes($path)
	{
		return str_replace('/', DIRECTORY_SEPARATOR, $path);
	}

	public static function getServerUrl()
	{
		return $_ENV['SERVER_URL'];
	}

	public static function getImage()
	{
		return $_ENV['PUBLIC_IMAGES'];
	}
}

?>
