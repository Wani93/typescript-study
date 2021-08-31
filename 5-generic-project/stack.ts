interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push('wani 1');
stack.push('hanna 2');
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
while (stack2.size !== 0) {
  console.log(stack2.pop());
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
