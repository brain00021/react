// map 一對一的推回給你
const array = [1,2,3];

const result = array.map(function(elem,idx,arr){
    return elem +1
})

// fliter 過濾一些不必要的
const result = array.filter((elem,idx,arr) => (
    elem % 2 === 0
))

//reduce 累加所有的值 (累加，各一值, id , array)
//initValue

const result = array.reduce((acc,elem,idx,arr)=>
    acc + elem,0
);

//會影響到本身的array pop 後面帶走一個  push 後面推上 shift unshift 第一位前面拿走  第一位前面推上)
array.pop() // 4
array.push(5); //512x512
array.shift();
array.unshift(0); // 01
array.reverse(); // 顛倒 
const newArr = [...array];
newArr.sort();
array.splice();

//我們很少用到會mutate 請盡量複製新的