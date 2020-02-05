export const AST_NODE_TYPES = {
  EQUATION: 'EQUATION',
  OPERATOR: 'OPERATOR',
  NUMBER: 'NUMBER',
  PAREN: 'PAREN'
};

export const SUPPORTED_AST_NODE_OPERATORS = {
  '+': '+',
  '-': '-',
  '/': '/',
  '*': '*'
};


export class AstNode {
  constructor(type, value) {
    if (!type) {
      throw new Error('Ast Nodes must have a type');
    }

    this.type = type;
    this.value = value;
    this.children = [];
  }

  addChildNode(node) {
    this.children.push(node);
  }
}
