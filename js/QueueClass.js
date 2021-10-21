class Queue{
  constructor(...args){
    this._head = 0;
    this._tail = 0;
    for(const arg of args){
      this.push(arg)
    }
  }

  get size(){
    return this._tail-this._head;
  }

  push(value){
    this[this._tail] = value;
    this._tail++;
  }

  unshift(){
    if(this.size){
      const delItem = this[this._head];
      delete this[this._head++];
      return delItem;
    }
  }
}

