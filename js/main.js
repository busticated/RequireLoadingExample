require.config({
    paths: {
        'jquery': 'one/libs/jquery'
    }
});
require([ 'jquery', 'one/app1', 'two/app2' ], function( $, one, two ){
    'use strict';

    console.log( one() );
    console.log( two() );
});
