let arr = [];

function but(val) {
  if (!(arr.length === 0 && isNaN(val))) {
    if ((isNaN(arr[arr.length - 1]) && isNaN(val))) {
      arr.pop();
    }
    arr.push(val);
  }
  document.querySelector(".display").innerHTML = arr.join("");
}

//clear display 값이 0
function c() {
  arr = [];
  document.querySelector(".display").innerHTML = "0";
}

//계산된 값
function total() {
  let total = eval(arr.join(""))
  arr = [];
  arr.push(total);
  document.querySelector(".display").innerHTML = total;
}