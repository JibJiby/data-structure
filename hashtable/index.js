const HashTable = require('./hashtable');

var hashTable = new HashTable(3);

hashTable.set(1, 'abc');
hashTable.set(0, 'jiby');
hashTable.set(2, 'today');
hashTable.print(); // { '0': 'jiby', '1': 'abc', '2': 'hello' }

console.log(hashTable.get(2)); // hello

hashTable.set(3, 'overflow?');
hashTable.print();

hashTable.set(4, 'hello');
hashTable.set(5, 'world'); // 공간은 남아있지만 추가되지 않음. (충돌)
hashTable.print();
