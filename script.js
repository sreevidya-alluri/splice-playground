let arr = [1, 7, 3, 1, 0, 20, 77];
let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");
let updatedArrayEl = document.getElementById("updatedArray");
let spliceBtnEl = document.getElementById("spliceBtn");

function convertArrToJsonStr() {
    let stringifiedArray = JSON.stringify(arr);
    updatedArrayEl.textContent = stringifiedArray;
}

convertArrToJsonStr();

spliceBtnEl.onclick = function spliceArray() {
    let startIndex = startIndexInputEl.value;
    let deleteIndex = deleteCountInputEl.value;
    let addValue = itemToAddInputEl.value;
    if (startIndex === "") {
        alert("Enter the start index");
        return;
    }
    if (deleteIndex === "") {
        deleteIndex = 0;
    }
    if (addValue === "") {
        arr.splice(parseInt(startIndex), parseInt(deleteIndex));
    } else {
        arr.splice(parseInt(startIndex), parseInt(deleteIndex), addValue)
    }
    startIndexInputEl.value = "";
    deleteCountInputEl.value = "";

    itemToAddInputEl.value = "";
    convertArrToJsonStr();
}