<?php

Routes::map('/', function($params){
	Routes::load('pages/index.php');
});

Routes::map('/about', function($params){
	Routes::load('pages/about.php');
});

Routes::map('/example', function($params){
	Routes::load('pages/example.php');
});


