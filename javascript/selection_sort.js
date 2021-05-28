function selectionSort(arr) {
  // type your code here
  sorted = [];

  while (arr.length > 0) {
    min = Math.min(...arr)
    idx = arr.indexOf(min)
    arr.splice(idx, 1)
    sorted.push(min);
  }
  return sorted
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  startTime = Date.now()
  for (let i = 0; i <1000; i++) {
    selectionSort([-1,4,2])
    selectionSort(longInput)
  }
  currentTime = Date.now()
  runTime = (currentTime - startTime) / 2000
  console.log(runTime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
