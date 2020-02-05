export enum AST_NODE_TYPES {
  EQUATION = 'EQUATION',
  OPERATOR = 'OPERATOR',
  NUMBER = 'NUMBER',
  PAREN = 'PAREN'
};

export enum AST_NODE_OPERATORS {
  PLUS = '+'
};

export class AstNode {
  type: AST_NODE_TYPES;
  value: AST_NODE_OPERATORS;
  children: AstNode[];

  constructor(type: AST_NODE_TYPES, value: AST_NODE_OPERATORS) {
    if (!type) {
      throw new Error('Ast Nodes must have a type');
    }

    this.type = type;
    this.value = value;
    this.children = [];
  }

  addChildNode(node: AstNode) {
    this.children.push(node);
  }
}
