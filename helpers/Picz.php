<?php

class Picz
{
    public static $images = [];

    public static function getAll()
    {
        return Picz::$images;
    }

    public static function add($key, $filename)
    {
		return Picz::$images[$key] = $filename;
    }

    public static function get($filename)
    {
        return get_template_directory_uri() . '/public/images/' . $filename;
    }
}

?>
