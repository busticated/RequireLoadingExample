define([ 'one/mods/a', 'one/mods/b' ], function( a, b ){
    'use strict';

    var test = function(){
        return {
            a: a,
            b: b
        };
    };

    return test;
});
