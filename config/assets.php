<?php

Themer::init();
Themer::addStyle('global_css', get_theme_file_uri('/public/frontend.css'));
Themer::addScript('custom-script', get_theme_file_uri('/public/customizer-bundle.js'), NULL, '1.0', true);
Themer::addScript('frontend-script', get_theme_file_uri('/public/frontend-bundle.js'), NULL, '1.0', true);
