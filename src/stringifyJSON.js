// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result = '';


  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    result += `"${obj}"`;
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    result += obj.toString();
  }

  if (Array.isArray(obj)) {
    obj.forEach(function(el) {
      result += stringifyJSON(el) + ',';
    });
    result = result.substring(0, result.length - 1);
    result = `[${result}]`;
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      result += stringifyJSON(key) + ':';
      result += stringifyJSON(obj[key]);
      result += ',';
      console.log(obj[key], typeof obj[key]);
    }
    result = result.substring(0, result.length - 1);
    result = `{${result}}`;
  }

  return result;

};
/*
// iterate over collection
// create return value string
// for in object
// if string
// concat with quotes

// if number or boolean
//convert to string
// if array
// iterate over the array
//concat each return value
// if object
// your code goes here
// recursive case
  // input: obj = {
  //       one: 1,
  //       array: [1, 2, 3],
  //       object: {
  //         key: false
  //       },
  //       string: 'string'
  //       }
  // output: "{"one":1,"array":[1,2,3],"object":{"key":false},"string":"string"}"
  */