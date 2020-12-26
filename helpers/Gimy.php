<?php

class Gimy
{
	public static function post()
	{
		return new TimberPost();
	}

	public static function posts(array $args = null)
	{
		$localArgs = $args ? $args : ['post_type' => 'post'];
		return new Timber\PostQuery($localArgs);
	}

	public static function customType(array $args)
	{
		return Timber::get_posts($args);
	}
}
