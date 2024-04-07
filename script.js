const outputSpan = document.getElementById('output');
const outputLst = [];
const operators = ["*", "/", "+", "-"]

const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const decimalBtn = document.getElementById('decimal');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');

zeroBtn.addEventListener('click', () => addItem("0"));
oneBtn.addEventListener('click', () => addItem("1"));
twoBtn.addEventListener('click', () => addItem("2"));
threeBtn.addEventListener('click', () => addItem("3"));
fourBtn.addEventListener('click', () => addItem("4"));
fiveBtn.addEventListener('click', () => addItem("5"));
sixBtn.addEventListener('click', () => addItem("6"));
sevenBtn.addEventListener('click', () => addItem("7"));
eightBtn.addEventListener('click', () => addItem("8"));
nineBtn.addEventListener('click', () => addItem("9"));
decimalBtn.addEventListener('click', () => addItem("."));

addBtn.addEventListener('click', () => addItem("+"));
subtractBtn.addEventListener('click', () => addItem("-"));
multiplyBtn.addEventListener('click', () => addItem("*"));
divideBtn.addEventListener('click', () => addItem("/"));
//equalsBtn.addEventListener('click');

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => clear());
const toggleSignBtn = document.getElementById('toggle-sign');
const percentBtn = document.getElementById('percent');

function addItem(item) {
    let validToAdd = true

    if (outputLst[0] == "0") {
        outputLst.length = 0;
    }

    if ((item == outputLst[outputLst.length-1] && operators.includes(outputLst[outputLst.length-1]))) {
        validToAdd = false;
    } else if (validToAdd) {
        outputLst.push(item);
        outputSpan.textContent = outputLst.join("");
    }
}

function clear() {
    
    outputLst.length = 0;
    outputLst.push("0");
    outputSpan.textContent = outputLst.join(" ");
    
}

