/* eslint-disable no-underscore-dangle */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const buildNode = (rootNode, left, right) => {
  rootNode.left = left;
  rootNode.right = right;
  return rootNode;
};

const newNode = (data) => {
  const node = new Node(data);
  return node;
};

const isOperator = (element) => {
  const operator = ['+', '-', '/', '*', '%'];
  if (operator.indexOf(element) !== -1) {
    return true;
  }
  return false;
};

class ExpressionTree {
  constructor(expression) {
    this.root = this.createExpressiontree(expression);
    this.inorderExpression = '';
    this.preorderExpression = '';
    this.postorderExpression = '';
  }

  createExpressiontree(str) {
    const array = str.split(' ');
    const stack = [];
    array.forEach((ele) => {
      if (isOperator(ele)) {
        const right = stack.pop();
        const left = stack.pop();
        const root = newNode(ele);
        const toPushNode = buildNode(root, left, right);
        stack.push(toPushNode);
      } else {
        const nodeNumber = newNode(ele);
        stack.push(nodeNumber);
      }
    });
    return stack[0];
  }

  inorder() {
    const rootNode = this.root;
    this._recursiveInorder(rootNode);
    return this.inorderExpression;
  }

  _recursiveInorder(root) {
    if (root === null) {
      return '';
    }
    if (isOperator(root.data)) {
      this.inorderExpression += '(';
    }
    this._recursiveInorder(root.left);
    this.inorderExpression += `${root.data} `;
    this._recursiveInorder(root.right);
    if (isOperator(root.data)) {
      this.inorderExpression += ')';
    }
    return '';
  }

  postorder() {
    const rootNode = this.root;
    this._recursivePostorder(rootNode);
    return this.postorderExpression;
  }

  _recursivePostorder(root) {
    if (root === null) {
      return '';
    }
    this._recursivePostorder(root.left);
    this._recursivePostorder(root.right);
    this.postorderExpression += `${root.data} `;
  }

  preorder() {
    const rootNode = this.root;
    this._recursivePreorder(rootNode);
    return this.preorderExpression;
  }

  _recursivePreorder(root) {
    if (root === null) {
      return '';
    }
    this.preorderExpression += `${root.data} `;
    this._recursivePreorder(root.left);
    this._recursivePreorder(root.right);
  }

  evaluate() {
    this.inorderExpression = '';
    this.inorder();
    const answer = eval(this.inorderExpression);
    return answer;
  }
}

const tree = new ExpressionTree('2 3 + 6 8 * -');

console.log(tree.inorder());
console.log(tree.preorder());
console.log(tree.postorder());

console.log(tree.evaluate());
