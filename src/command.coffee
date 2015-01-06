command = ->
    console.log greet(parseArgs._, parseArgs.drunk)
module.exports = command
greet = require("../lib/index.js")
parseArgs = require("minimist")(process.argv.slice(2))
