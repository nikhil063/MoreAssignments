//merge sort program in JavaScript. Sample array : [34,7,23,32,5,62] Sample output : [5, 7, 23, 32, 34, 62]
function mergeSort(array){
    if(array.length <2){
        return array;
    }
    let mid = Math.floor(array.length/2)
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArray, rightArray){
    let sortArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortArray.push(leftArray.shift());
        }
        else{
            sortArray.push(rightArray.shift());
        }
    }
   return [...sortArray,...leftArray,...rightArray];
}

console.log(mergeSort([34,7,23,32,5,62]));