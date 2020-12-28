<?php
/*** Template Name: About Page*/

$context = Timber::context();
$mainImage = Picz::get('pic.jpg');
Picz::add('pic', $mainImage);;
$context['images'] = Picz::getAll();
$context['post'] = Gimy::post();
Timber::render('/about.twig', $context);

