export enum AST_NODE_TYPES {
  EQUATION = 'EQUATION',
  OPERATOR = 'OPERATOR',
  NUMBER = 'NUMBER',
  PAREN = 'PAREN'
};

export enum AST_NODE_OPERATORS {
  PLUS     = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE   = '/'
};

export class AstNode {
  type: AST_NODE_TYPES;
  value: AST_NODE_OPERATORS | number;
  children: AstNode[];

  constructor(type: AST_NODE_TYPES, value: AST_NODE_OPERATORS | number) {
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
