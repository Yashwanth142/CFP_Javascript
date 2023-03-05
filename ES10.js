//ES10
//flat() and flatMap() are essentially operations of reduce and concat.

//flat()->
//The basic function of flat() method is to reduce the dimension of array
//Secondly, we can use the characteristics of the flat() method to remove the empty items of the array

var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]
 
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
 
var arr3 = [1, 2, [3, 4, [5, 6]]];

arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
 
//Using Infinity as the depth, expand the nested array of any depth
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]
 
 
//Remove null items
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

//flatMap()->

var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// Only "flatten" the array returned by the function in flatMap
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
