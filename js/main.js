require({
    paths: {
        'jquery': 'one/libs/jquery',
        'one': '/js/one',
        'two': '/js/two'
    }
});
require([ 'jquery', 'one/app1', 'two/app2' ], function( $, one, two ){
    'use strict';

    console.log( one() );
    console.log( two() );
});
