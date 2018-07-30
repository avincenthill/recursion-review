// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result;
  
  // I: object
  // O: JSON like string
  // C: Match JSON.Stringify results
  // E: functions/undefined: return {}
  
  //handle null
  if (obj === null){
    return "null"; 
  }

  //handle objects
  if (typeof obj === "object") {
    let object = {};
    if (!Object.keys(obj)) {
      return "{}";
    }
    // for (let i=0; i<obj.length; i++) {
    //   array.push(stringifyJSON(obj[i]));
    // }
    // result = "[" + array + "]";
  }

  //handle arrays
  if (Array.isArray(obj)) {
    let array = [];
    if (!obj.length) {
      return "[]";
    }
    for (let i=0; i<obj.length; i++) {
      array.push(stringifyJSON(obj[i]));
    }
    result = "[" + array + "]";
  }

    //iterate through array and add each element to result array

  //handle strings
  if (typeof obj === "string") {
    result = '"' + obj + '"';
  } 

  //handle values
  if (!result) {
    result = obj + "";
  }
  
  return result;
};
