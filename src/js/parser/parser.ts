import { AST_NODE_TYPES, AST_NODE_OPERATORS, AstNode } from './ast-node';

export function parseTokensIntoAst(tokens) {
  let ast = new AstNode(AST_NODE_TYPES.EQUATION, 0);

  addNodeToAstFromTokens(ast, tokens);

  return ast.children[0];
}

function addNodeToAstFromTokens(ast: AstNode, tokens: string[]) {

  // Handle laest priority first, since we are building the tree top down

  const foundOperator = Object.keys(AST_NODE_OPERATORS).some((operator: AST_NODE_OPERATORS) => {
    if (tokens.includes(operator)) {
      const operatorNode = getOperatorNode(operator, tokens);

      // Add the plus node to the AST
      ast.addChildNode(operatorNode);

      return true;
    }

    return false;
  });
  if (foundOperator) {
    return;
  }

    /*
  // Handle parentheses
  if (tokens[0] === '(') {
    // Check if we can find a closing Paren
    if (tokens.indexOf(')', 1) > -1) {
      // Create the paren node
      let parenNode = new AstNode(AST_NODE_TYPES.PAREN);

      // Get the tokens from the opening paren, to the closing Paren
      const parenTokens = tokens.splice(0, tokens.indexOf(')', 1));

      // Recursively parse the contents of the paren
      console.log('parenTokens', parenTokens);
      addNodeToAstFromTokens(parenNode, parenTokens);

      // Add the Paren Node to the parent ast
      ast.addChildNode(parenNode);

      // Run the 
    } else {
      // Just drop the token
      tokens.shift();
    }
  }
  */

  // Default, must be a number value
  try {
    const val = parseInt(tokens[0], 10);

    const numberNode = new AstNode(AST_NODE_TYPES.NUMBER, val);
    ast.addChildNode(numberNode);
  } catch (e) {
    alert(`Expected integer value, got "${tokens[0]}"`);
  }
}

function getOperatorNode(operator: AST_NODE_OPERATORS, tokens: string[]) {
  const operatorNode = new AstNode(AST_NODE_TYPES.OPERATOR, AST_NODE_OPERATORS[operator]);

  // Get all the tokens to the left of the plus
  const leftTokens = tokens.splice(0, tokens.indexOf(operator));
  const rightTokens = tokens.splice(1);

  // Add the two tokens to the node
  addNodeToAstFromTokens(operatorNode, leftTokens);
  addNodeToAstFromTokens(operatorNode, rightTokens);

  return operatorNode;
}
