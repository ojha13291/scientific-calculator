let display = document.getElementById('display');
let advancedVisible = false;

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendFunction(func) {
    display.value += func;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function toggleAdvanced() {
    const advanced = document.getElementById('advanced');
    advancedVisible = !advancedVisible;
    advanced.style.display = advancedVisible ? 'block' : 'none';
}
