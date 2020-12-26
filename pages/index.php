<?php
/*** Template Name: Home Page*/

$context = Timber::context();
$context['posts'] = Gimy::posts();
Timber::render( '/index.twig',$context);

