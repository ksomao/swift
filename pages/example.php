<?php
/*** Template Name: Example Page*/

//$posts = Timber::get_posts('post_type = article');
//$posts = Timber::get_posts();
$context = Timber::context();
$context['posts'] = new Timber\PostQuery(['post_type' => 'post']); // uses wp_query format.
$context['page'] = new Timber\Post();
Timber::render( '/example.twig', $context );

