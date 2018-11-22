var abcd = ["A","B","C","D"];

abcd.splice()
splice(起始索引,刪除個數,替換的值,,,,,,) //用來刪除陣列元素
slice(起始索引,結束索引)//用來擷取A與B之間的元素，Reference
forEach(對陣列中每個元素進行操作的函數)//該函數不可有回傳直,()函數至少要有一個參數用於接收陣列每個元素A(element,index,array)
map(函數(element,index,array))//用法與forEach相同，for是直接對呼叫該方法的陣列做改變，map則需要有var去接回傳結果
filter(函數(element,index,array))//此函數回傳值為bool，若為真存起來，為假就過濾掉。(需var接收)
some(函數(element,index,array))// 與every相反，當函數回傳false，some會繼續代入下一個陣列元素直到從頭到尾回傳false結束，但回傳true則立即中斷訪問，並回傳最後結果(回傳值)
every(函數(element,index,array))//與some相反
