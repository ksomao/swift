<?php

$timber = new \Timber\Timber();

\Timber\Timber::$dirname = [
    "views/pages",
    "views/templates",
    "views/components",
    "views/partials"
];

add_filter('timber/twig', 'add_to_twig');
add_filter('timber/context', 'add_to_context');

function add_to_context($context)
{
    $context['menu'] = new Timber\Menu('primary-menu');
    return $context;
}

function add_to_twig($twig)
{
    $twig->addFunction(new Timber\Twig_Function('get', 'get'));
    $twig->addFunction(new Timber\Twig_Function('getf', 'getf'));
    $twig->addFunction(new Timber\Twig_Function('getImage', 'getImage'));
    return $twig;
}

function get($file)
{
    $file .= '/index.twig';
    return $file;
}

function getf($file)
{
    $file .= '.twig';
    return $file;
}

function getImage($file)
{
    $file = $_SERVER['DOCUMENT_ROOT'].'/images/'.$file;
    return $file;
}

