'use strict';

var fildes = require('fildes');
var cpy = require('cpy');
var rimraf = require('rimraf');
var trash = require('trash');
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


fildes.cp = fildes.copy = function(files, destination, o){
    o = o || {};
    return new Promise(function(resolve, reject){
        cpy(files, destination, o, function(err){
            debug(err || 'cpy');
            if (err) return reject(err);
            resolve();
        });
    });
};


fildes.trash = function(files){
    return trash(files);
};


module.exports = fildes;
