// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, inputNode
) {
  var result = [];
  var currentNode = inputNode || document.body;

  if (currentNode.classList && currentNode.classList.contains(className)) {
    result.push(currentNode);
  }

  if (currentNode.childNodes) {
    for (var i = 0; i < currentNode.childNodes.length; i++) {
      if (currentNode.childNodes[i] !== undefined) {
        result = result.concat(getElementsByClassName(className, currentNode.childNodes[i]));
      }
    }
  }

  return result;
};

/*
Input-
Classname

Output-
Array of each matching class element

Create our result array

If our current node has children
  Iterate over the children
    Concat matching class elements to result
Return the result array


*/