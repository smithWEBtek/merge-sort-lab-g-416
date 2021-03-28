// function findMinAndRemoveSorted(arr) {
//   let min = arr[0];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] <= min){
//       min = arr[i]
//     }
//     findMinAndRemoveSorted(arr.shift())
//   }
//   return min
// }

// function findMinAndRemoveSorted(arr){
//   let mid = arr[(length - 1) / 2]
//   let firstHalf = arr.splice(0, mid)
//   let secondHalf = arr.splice(mid, arr.length - 1)
//   let minfirstHalf = firstHalf[0]
//   let minsecondHalf = secondHalf[0]

//   if(minfirstHalf < minsecondHalf){
//     return firstHalf.shift()
//   } else {
//     return secondHalf.shift()
//   }
// }

function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(firstSubarray, secondSubArray) {
  let sorted = []
  while (firstSubarray.length != 0 && secondSubArray.length != 0) {
    if (firstSubarray[0] < secondSubArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(array) {
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;

  if (array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}