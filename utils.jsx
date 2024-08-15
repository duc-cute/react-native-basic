export  function evaluateExpression(expression) {
  return Function('"use strict";return (' + expression + ')')();
}