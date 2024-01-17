class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items.findIndex(0);
  }

  isEmpty() {
    return this.items.length > 0 ? "false" : "true";
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

export { Stack }