function updateName() {
  var newName = prompt("Enter your new name: ");
  document.getElementById("name").innerHTML = "Player1: " + newName;
}

function sending() {
  document.getElementById("email").innerHTML = "";
  document.getElementById("phone").innerHTML = "";
  document.getElementById("form").re
  alert("Your request has been approved");
}

function workExp(arr) {
  var ul = document.createElement("ul"),
    li;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      li.appendChild(arrToUl(arr[i]));
    } else {
      li = document.createElement("li");
      li.appendChild(document.createTextNode(arr[i]));
      ul.appendChild(li);
    }
  }
  return ul;
}
var myArray = [
  "Value 1",
  ["Inner value 1", "Inner value 2", "Inner value 3", "Inner value 4"],
  "Value 2",
  "Value 3",
  "Value 4",
  "Value 5",
  "Value 6",
];
document.body.appendChild(arrToUl(myArray));
