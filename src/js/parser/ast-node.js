export class AST_NODE_TYPES = {
  EQUATION: 'EQUATION',
  OPERATOR: 'OPERATOR',
  NUMBER: 'NUMBER'
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
