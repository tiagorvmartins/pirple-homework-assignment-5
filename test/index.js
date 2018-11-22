/*
 * Init file to launch the testRunner, such that 'node test' is a valid command on the directory
 *
 */

// Dependencies
var testRunner = require('./test_runner')

// Run the tests
testRunner.runTests();
