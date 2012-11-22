require.config({
    paths: {
        'jquery': 'libs/jquery',
        'one': '.'
    }
});
require([ 'jquery', 'one/app1' ], function( $, one ){
    'use strict';

    console.log( one() );
});
