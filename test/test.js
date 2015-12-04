var file = require('../');

var tape = require('tape');
var resolve = require('path').resolve;
var debug = require('debug');
debug.log = console.log.bind(console);

tape('setup', function(t){
    var path = resolve(__dirname, './data');

    file.rmdir(path)
    .then(function(){
        return file.mkdir(path);
    })
    .then(function(){
        t.end();
    })
    .catch(function(error){
        t.error(error);
        t.end();
    });
});

require('./test-dir.js');
require('./test-trash.js');
