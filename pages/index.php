<?php
/*** Template Name: Home Page*/

$context = Timber::context();
$context['posts'] = new Timber\PostQuery(['post_type' => 'post']);
Timber::render( '/index.twig',$context);

