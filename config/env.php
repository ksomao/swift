<?php
$env_variable = require 'env.helpers.php';
//VARIABLE
$_ENV['PATH'] = new stdClass();
$_ENV['PATH']->theme = $env_variable->theme_absolute_path;
$_ENV['PATH']->helpers = $env_variable->theme_absolute_path . 'helpers/';
$_ENV['PATH']->config = $env_variable->theme_absolute_path . 'config/';
$_ENV['PATH']->images = $env_variable->theme_absolute_path . 'public/images/';
$_ENV['SERVER_URL'] = $env_variable->server_url;
$_ENV['PUBLIC_IMAGES'] = $env_variable->server_url . 'public/images/';
$_ENV['AUTOLOAD_FOLDERS'] = [
	$_ENV['PATH']->helpers,
	$_ENV['PATH']->theme,
	$_ENV['PATH']->config
];
