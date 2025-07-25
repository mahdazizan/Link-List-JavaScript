class node{
  constructor(value , next = null){
    this.value = value;
    this.next = next; 
  } 
}

class linkedlist{
  constructor(){
    this.head = null;
  }

  insert (value){
    const newnode = new node(value , this.head);
    this.head = newnode;
  }

  insertlist (value){
    const newnode = new node(value);
    if(this.head === null){
      this.head = newnode;
    }
    else{
      let current = this.head;
      while(current.next !== null){
        current = current.next;
      }
      current.next = newnode;
    }
  }

  size(){
    let count=0;
    let current = this.head;
    while(current !== null){
      count++;
      current = current.next;
    }
    return count;
  }
  
  at(n){
    let current = this.head;
    let index = 0;
    while(current !== null){
      if(index === n){
        return current;
      }
      else{
        current = current.next;
        index++;
      }      
    } 
    return null;
  }

  join(separator = ',')
  {
    const values = [];
    let current = this.head;
    while(current !== null){
      values.push(current.value);
      current = current.next;
    }
    return values.join(separator);
  }

  map(func){
    const newlist = new linkedlist();
    let current =this.head;
    while(current !== null){
      const newvalue = func(current.value);
      newlist.insertlist(newvalue);
      current = current.next;
    }
    return newlist;
  }

  filter(func){
    const newlist = new linkedlist();
    let current = this.head;
    while(current !== null){
      if(func(current.value)){
        newlist.insertlist(current.value);
      }
      current = current.next;
    }
    return newlist;
  }

  find(func){
    let current = this.head;
    while(current !== null){
      if(func(current.value)){
        return current;
      }
      current = current.next;
    }
    return null;
  }
  

  print(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
}



//test find
const findlist = new linkedlist();
findlist.insertlist(10);
findlist.insertlist(20);
findlist.insertlist(30);
const found = findlist.find(x => x > 15);
console.log(found?.value);
const notfound = findlist.find(x => x > 100);
console.log(notfound);



//test filter
const filterlist = new linkedlist;
filterlist.insertlist(1);
filterlist.insertlist(2);
filterlist.insertlist(3);
filterlist.insertlist(4);
const eventlist = filterlist.filter(x => x % 2 === 0);
console.log(eventlist.join(' -> '));

//test map(func)
const maplist = new linkedlist();
maplist.insertlist(1);
maplist.insertlist(2);
maplist.insertlist(3);
const doubled = maplist.map(x => x * 2);
console.log(doubled.join(' -> '));



//test join separator
const joinlist = new linkedlist();
joinlist.insertlist('a');
joinlist.insertlist('b');
joinlist.insertlist('c');
console.log(joinlist.join(' -> '));
console.log(joinlist.join());



//test at
const atlist = new linkedlist();
atlist.insertlist('a');
atlist.insertlist('b');
atlist.insertlist('c');
console.log(atlist.at(0)?.value);
console.log(atlist.at(2)?.value);
console.log(atlist.at(5));



//test size
const sizelist = new linkedlist();
sizelist.insert('b');
sizelist.insertlist('h');
sizelist.insert('a');
sizelist.print();
console.log("size :" , sizelist.size());



//test print insertlist
const insertlistlist = new linkedlist();
insertlistlist.insertlist('a');
insertlistlist.insertlist('b');
insertlistlist.insert('z');
insertlistlist.print();



//test print new list for firstindex
const firstindexlist = new linkedlist();
firstindexlist.insert('b');
firstindexlist.insert('a');
firstindexlist.print();