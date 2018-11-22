/*
 * The specific tests for the lib.js
 *
 */

 // Dependencies
 var assert = require('assert');
 var lib = require('../../app/lib');


 // Holder for the lib tests
 var libTests = {};

 // The function sumBetweenNumbers should return the sum between two valid numbers otherwise return undefined
 libTests['lib.sumBetweenNumbers should return the sum between two valid numbers otherwise return undefined'] = function(done){
   assert.doesNotThrow(function(){
     var firstNumber = 2;
     var secondNumber = 4;
     var expectedSum = 6;

     var result = lib.sumBetweenNumbers(firstNumber, secondNumber);
     assert.equal(typeof(result), 'number');
     assert.equal(result, 6);


     var resultInvalid = lib.sumBetweenNumbers('str', secondNumber);
     assert.equal(resultInvalid, undefined);
     done();
   }, TypeError);
 };

 // The function returnLenghtOfString should return the length of a valid string otherwise doesn't throw error
 libTests['lib.returnLenghtOfString should return the length of the string'] = function(done){
   assert.doesNotThrow(function(){
     var string = 'test';
     var expectedLength = 4;

     var result = lib.returnLenghtOfString(string);
     assert.equal(typeof(result), 'number');
     assert.equal(result, expectedLength);
     done();
   }, TypeError);
 };

 // The function generateRandomNumberBetweenZeroAndTen should return a number between 0 and 9 (included both)
 libTests['lib.generateRandomNumberBetweenZeroAndTen should return a number between zero and ten'] = function(done){
   var result = lib.generateRandomNumberBetweenZeroAndTen();
   assert.equal(typeof(result), 'number');
   assert.ok(result > -1 && result < 10);
   done();
 };

 // The function generateRandomNumberBetweenZeroAndOneHundred should return a number between 0 and 100 (included both)
 libTests['lib.generateRandomNumberBetweenZeroAndOneHundred should return a number between zero and one hundred'] = function(done){
   var result = lib.generateRandomNumberBetweenZeroAndOneHundred();
   assert.equal(typeof(result), 'number');
   assert.ok(result > -1 && result < 100);
   done();
 };

 // The function generateRandomNumberBetweenZeroAndArgument should return a number between 0 and the argument specified if valid number (included both)
 libTests['lib.generateRandomNumberBetweenZeroAndArgument should return a number between zero and a valid number, otherwise return undefined'] = function(done){
   assert.doesNotThrow(function(){
     var resultShouldBeUndefined = lib.generateRandomNumberBetweenZeroAndArgument('notANumber');
     assert.equal(resultShouldBeUndefined, undefined);

     var resultShouldBeBetweenZeroAndThree = lib.generateRandomNumberBetweenZeroAndArgument(3);
     assert.equal(typeof(resultShouldBeBetweenZeroAndThree), 'number');
     assert.ok(resultShouldBeBetweenZeroAndThree > -1 && resultShouldBeBetweenZeroAndThree < 3);
     done();
   }, ReferenceError);
 };

 // The function checkStringIsPalindrome should evaluate if a given string is a palindrome or not
 libTests['lib.checkStringIsPalindrome should evaluate if a given string is a palindrome or not'] = function(done){
   assert.doesNotThrow(function(){
     var resultShouldBeTruthy = lib.checkStringIsPalindrome('TAPAT');
     assert.equal(resultShouldBeTruthy, true);

     var resultShouldBeFalsy = lib.checkStringIsPalindrome('TPPAT');
     assert.equal(resultShouldBeFalsy, false);

     var resultShouldBeFalsyAgain = lib.checkStringIsPalindrome(49);
     assert.equal(resultShouldBeFalsyAgain, false);
     done();
   }, TypeError);
 };

 // Export the tests to the runner
 module.exports = libTests;
