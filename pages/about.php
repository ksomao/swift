<?php
/*** Template Name: About Page*/

$context = Timber::context();
$images = new Image();
$images->addImage('pic', $images::get('pic.jpg'));;
$context['images'] = $images->getAll();
Timber::render('/about.twig', $context);

