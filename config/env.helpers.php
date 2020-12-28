<?php

define('PROJECT_NAME', 'heat-grow');
define('THEME_NAME', 'wptheme_starter');

$env_variables = new stdClass();
$project_root = $_SERVER['DOCUMENT_ROOT'];
$project_root_parts = explode('/', $project_root);
$project_root_last_part = end($project_root_parts);
$project_root_name = $project_root_last_part === 'www' ? sprintf("{$project_root}/%s", PROJECT_NAME) : $project_root;
$env_variables->project = $project_root_name;
$env_variables->theme = sprintf("/wp-content/themes/%s/", THEME_NAME);
$env_variables->theme_absolute_path = $env_variables->project . $env_variables->theme;
$env_variables->server_url = sprintf("%s://%s/", isset($_SERVER['HTTPS'])
&& $_SERVER['HTTPS'] != 'off' ? 'https' : 'http', $_SERVER['SERVER_NAME']);

return $env_variables;



