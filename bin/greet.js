#!/usr/bin/env node
var greet = require('../lib/index.js');
var parseArgs = require('minimist')(process.argv.slice(2));

console.log(greet(parseArgs._,parseArgs.drunk));

