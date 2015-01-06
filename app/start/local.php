<?php

# PHP Dotenv
if (File::exists(base_path() . '/.env')) {
    Dotenv::load(base_path());
}
