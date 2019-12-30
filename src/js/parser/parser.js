import {AST_NODE_TYPES} from './ast-node';

export function parseTokensIntoAst(tokens) {
  let ast = new AstNode(AST_NODE_TYPES.EQUATION);

  while (tokens.length) {
    addNodeToAstFromTokens(ast, tokens);
  }

  return ast;
}

function addNodeToAstFromTokens(ast, tokens) {
  tokens.unshift();
}
