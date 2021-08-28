interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push('wani 1');
stack.push('hanna 2');
while (stack.size !== 0) {
  console.log(stack.pop());
}

// 내가 만든 Stack

// class LinkedNode {
//   constructor(public value, public prev) {}
// }

// class Stack implements Stack {
//   private header: LinkedNode;
//   constructor() {
//     this.header = new LinkedNode(null, null);
//   }
//   push(value: string) {
//     if (!this.header.value) {
//       this.header.value = value;
//     } else {
//       const newNode = new LinkedNode(value, this.header);
//       this.header = newNode;
//     }
//   }
//   pop(): string {
//     if (!this.header) {
//       return 'no data';
//     }
//     const result = this.header.value;
//     this.header = this.header.prev;
//     return result;
//   }
// }
