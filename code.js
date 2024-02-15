//Credit to Ishita Patel for helping make my code work, initially the commented out sections were different

function insertionSortReverse(arr) 
{
  //originally for(var i = arr.length-1; i > 1; i--)
  for(var i = arr.length-1; i >= 0; i--) 
  {
    var val = arr[i];
    var j;
    //originally had this the same, but she pointed out I should reverse this
    for(j = i; j < arr.length-1  && arr[j+1] < val; j++) 
    {
      //missed reversing this too
      arr[j] = arr[j+1];
    }
    arr[j] = val;
    //console.log(arr)
  }
  return arr;
}
//console.log(insertionSort(arr))
