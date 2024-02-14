function insertionSortReverse(arr) 
{
  for(var i = arr.length-1; i > 1; i--) 
  {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
    //console.log(arr)
  }
  return arr;
}

//console.log(insertionSort(arr))
