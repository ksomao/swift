<?php
/*** Template Name: Example Page*/

$context = Timber::context();
$context['posts'] = Gimy::posts(['post_type' => 'post']);
$context['page'] = new Timber\Post();
Timber::render( '/example.twig', $context );

