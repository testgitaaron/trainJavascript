
//以下有三種函數宣告方式

var code = function();
var code2 = function methon();
function code3();

//以上三種方法前兩種是一樣的意思，差別在於第一種匿名函數就像C++中的Lambda，用完就釋放的概念
//而前兩種的宣告方式會像C++若定義在使用之後，則編譯會找不到函數
//第三種宣告方式是不管定義在哪個位置，到哪裡使用都用的到

//第三種唯一缺點就是它就像全域函數，容易多出不必要的浪費及危險
//但若在Array方法中Call他速度會比上述兩種快 EX:array.some(code3) > array.some(code)
