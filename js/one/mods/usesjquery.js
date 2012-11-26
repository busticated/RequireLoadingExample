define([ 'jquery' ], function( $ ){
    'use strict';

    var m = {};

    m.setup = function(){
        console.log( ':::: module: usesjquery.js :::::::::::' );
        console.log( ':::: jQuery version : ' + $( document ).jquery );
        console.log( ':::: jQuery UI available : ' + ( typeof $( document ).dialog === 'function' ) );
        console.log( ':::: Global jQuery version : ' + window.$( document ).jquery );
        console.log( ':::: Global jQuery UI available : ' + ( typeof window.$( document ).dialog === 'function' ) );
        console.log( '::::::::::::::::::::::::::::::::::::::' );
    };

    return m;
});
