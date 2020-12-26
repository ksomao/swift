<?php
/*** Template Name: About Page*/

$context = Timber::context();
Picz::addImage('pic', Picz::get('pic.jpg'));;
$context['images'] = Picz::getAll();
$context['post'] = Gimy::post();
Timber::render('/about.twig', $context);

