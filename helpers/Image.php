<?php

class Image
{
    public $images = [];

    public function getAll()
    {
        return $this->images;
    }

    public function addImage($key, $filename)
    {
        $this->images[$key] = $filename;
    }

    public static function get($filename)
    {
        return get_template_directory_uri() . '/public/images/' . $filename;
    }
}

?>
