define([ 'two/mods/a', 'two/mods/b' ], function( a, b ){
    'use strict';

    var test = function(){
        return {
            a: a,
            b: b
        };
    };

    return test;
});
