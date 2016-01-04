'use strict';

var fildes = require('fildes');
var cpy = require('cpy');
var rimraf = require('rimraf');
var trash = require('trash');
var emptyTrash = require('empty-trash');
var debug = require('debug')('fildes:extra');


fildes.rm = fildes.rmdir = function(dir){
    return new Promise(function(resolve, reject){
        rimraf(dir, function(err){
            debug(err || 'rimraf');
            /* istanbul ignore if */
            if (err) return reject(err);
            resolve();
        });
    });
};


fildes.cp = fildes.copy = cpy;


fildes.trash = function(files){
    return trash(files);
};

fildes.emptyTrash = function(){
    return emptyTrash();
};


module.exports = fildes;
