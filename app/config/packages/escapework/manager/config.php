<?php 
/**
 * Configurações globais do manager
 *
 * @author  Luís Dalmolin <luis@escape.ppg.br>
 */


return array(

    /**
     * URL do manager
     */
    'url'      => '/manager', 

    'title'    => 'escape.manager', 
    'subtitle' => '', 

    /**
     * Nome do arquivo para o template do menu
     */
    'menu'     => null, 

    /**
     * Templates que podem ser sobreescritor
     */
    'templates' => array(
        'home' => 'manager::home', 
    ), 

    /**
     * Extra fields for the user 
     */
    'extra_fields' => array(
        'User' => array()
    ), 

);