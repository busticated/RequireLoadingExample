require.config({
    paths: {
        'jquery': 'libs/jquery',
        'jqnoconflict': 'mods/jquery-noconflict'
    }
});
require([ 'jquery', 'mods/usesjquery', 'jqnoconflict' ], function( $, usesJQ ){
    'use strict';

    console.log( ':::: main-noconflict.js ::::::::::::::' );
    console.log( ':::: jQuery version : ' + $( document ).jquery );
    console.log( ':::: jQuery UI available : ' + ( typeof $( document ).dialog === 'function' ) );
    console.log( ':::: Global jQuery version : ' + window.$( document ).jquery );
    console.log( ':::: Global jQuery UI available : ' + ( typeof window.$( document ).dialog === 'function' ) );
    console.log( '::::::::::::::::::::::::::::::::::::::' );

    usesJQ.setup();
});
