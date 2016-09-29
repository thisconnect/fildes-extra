var file = require('../');

var tape = require('tape');
var resolve = require('path').resolve;

tape('find files', function(t){
    file.find('test/*.js')
    .then(function(files){
        t.ok(Array.isArray(files), 'has files array')
        t.ok(files.length, 'found some files')
        t.end();
    })
    .catch(function(error){
        t.error(error);
        t.end();
    });
});
