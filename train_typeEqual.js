

var sentence = 'this is one sentence.this is a XXXXXX:' + 'cherries, oranges, apples, bananas. that was the list of items';
var start = sentence.indexOf(':');//從頭找出上述字串第一個:的index
var end = sentence.indexOf('.',start + 1);//從上一個找的位置+1開始找

var list = sentence.substring(strat + 1, end);
var fruits = list.split(',');//根據擷取的開始與結束中的字串，以,來分割
console.log(fruits);//['','','','']

//typeof 回傳某個var的型態
//型態:undefined有宣告沒定義
//若X是物件型態，並指向空間number，要對number做存取(*X)，必須使用X.valueOf()
//js中的===相對於C中的==，js中的==意思為會將等號兩側型態轉為相同後才會比較
