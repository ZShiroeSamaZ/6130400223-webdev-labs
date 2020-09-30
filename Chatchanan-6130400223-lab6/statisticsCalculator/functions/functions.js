function init() {
  list = readInput();
  displayStats(list);
}

function readInput() {
  let outputList = [];
  while (1) {
    let num = prompt("Enter an integer (a negative integer to quit)");
    if (!num.match(/\d/g) || num.includes(".")) continue;
    num = parseInt(num);
    if (Number.isInteger(num) && num > 0) outputList.push(num);
    else break;
  }
  return outputList;
}

function displayStats(inputList) {
  let count = 0;
  let total = 0;
  let minMax;
  inputList = inputList.sort();
  inputList.forEach((num) => {
    total += num;
    count++;
  });
  let aver = total != 0 ? (total / count).toFixed(2) : 0;
  inputList == ""
    ? (minMax = [0, 0])
    : (minMax = [inputList[0], inputList[inputList.length - 1]]);
  alert(
    `For the list ${inputList}, the average is ${aver}, the minimum is ${minMax[0]}, and the maximum is ${minMax[1]}`
  );
}
