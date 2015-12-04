var file = require('../');

var tape = require('tape');
var resolve = require('path').resolve;

var filepath1 = resolve(__dirname, './data/trash.txt');
var filepath2 = resolve(__dirname, './data/trash.txt');


tape('setup trash', function(t){
    Promise.all([
        file.writeFile(filepath1, 'going to trash this\n'),
        file.writeFile(filepath2, 'going to trash too\n')
    ])
    .then(function(){
        t.end();
    })
    .catch(function(error){
        t.error(error);
        t.end();
    });
});


tape('trash', function(t){
    file.trash([filepath1])
    .then(function(data){
        t.pass('moved file to trash');
        t.end();
    })
    .catch(function(error){
        t.error(error);
        t.end();
    });
});
