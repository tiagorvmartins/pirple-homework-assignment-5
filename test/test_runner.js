/*
 * Test runner
 *
 */

 // Application logic for the test runner
 var testRunner = {};

 // Container for the tests
 testRunner.tests = {

 };

 // Add on the unit tests
 testRunner.tests.libTests = require("./unit_tests/libTests");

// Run all the tests, collecting the errors and successes
testRunner.runTests = function(){
  var errors = [];
  var successes = 0;
  var limit = testRunner.countTests();
  var counter = 0;

  for(var key in testRunner.tests){
    var subTests = testRunner.tests[key];
    for(var testName in subTests){
      if(subTests.hasOwnProperty(testName)){

        (function(){
          var tmpTestName = testName;
          var testValue = subTests[testName];

          // Call the test
          try{
            testValue(function(){
                // If it calls back without throwing, then it succeeded, so log it in green
                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                counter++;
                successes++;

                if(counter == limit){
                  testRunner.produceTestReport(limit, successes, errors);
                }
            });
          }catch(e){
            // If it throws, then it failed, so capture the error thrown and log it in red
            errors.push({
              'name': testName,
              'error': e
            });
            console.log('\x1b[31m%s\x1b[0m', tmpTestName);
            counter++;
            if(counter == limit){
              testRunner.produceTestReport(limit, successes, errors);
            }
          }
        })();
      }
    }
  }
};

// Count all the tests
testRunner.countTests = function(){
  var counter = 0;
  for(var key in testRunner.tests){
    if(testRunner.tests.hasOwnProperty(key)){
      var subTests = testRunner.tests[key];
      for(var testName in subTests){
        if(subTests.hasOwnProperty(testName)){
          counter++;
        }
      }
    }
  }
  return counter;
};

// Produce a test outcome report
testRunner.produceTestReport = function(limit, successes, errors){
  console.log("");
  console.log("------------BEGIN TEST REPORT-------------");
  console.log("");
  console.log("Total Tests: ", limit);
  console.log("Pass: ", successes);
  console.log("Fail: ", errors.length);
  console.log("");

  // If there are errors, print them in detail
  if(errors.length > 0){
    console.log("-------------BEGIN ERROR DETAILS-------------");
    console.log("");

    errors.forEach(function(testError){
      console.log('\x1b[31m%s\x1b[0m',testError.name);
      console.log(testError.error);
      console.log("");
    });


  }

  console.log("");
  console.log("-------------END TEST REPORT-------------");
  process.exit(0);
}


module.exports = testRunner;
