const MyArray = require('./array');

var myArray = new MyArray();
myArray.print();

// 추가
myArray.push('Jiby');
myArray.push('JibJiby');
myArray.print();

// 삽입
myArray.insert(1, 'Happy');
myArray.print();

// 삭제
myArray.delete(0);
myArray.print();

myArray.insert(3, 'Error!'); // 에러 발생!!
