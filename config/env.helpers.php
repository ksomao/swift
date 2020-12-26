<?php
$env_variables = new stdClass();
$env_variables->project = $_SERVER['DOCUMENT_ROOT'];
$env_variables->theme = '/wp-content/themes/landing/';
$env_variables->theme_absolute_path = $env_variables->project . $env_variables->theme;
$env_variables->server_url = sprintf("%s://%s/", isset($_SERVER['HTTPS'])
	&& $_SERVER['HTTPS'] != 'off' ? 'https' : 'http', $_SERVER['SERVER_NAME']);

return $env_variables;



