// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //You should use document.body, element.childNodes, and element.classList
  //inner function of test node
  //I: className string
  //O: array of html element names
  //C: match document.getElementsByClassName output
  //E: watch for multiple classnames per element

  let results = [];
  let testNodes = node => {
    if (node && node.classList.contains(className)) {
      results.push(node);

      if (Array.from(node.childNodes).length > 0) {
        for (let i = 0; i < Array.from(node.childNodes).length; i++) {
          testNodes(node[i]);
        }
      }
    }
  };

  testNodes(document.body);

  return results;
};
